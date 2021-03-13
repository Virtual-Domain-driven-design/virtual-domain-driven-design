import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import Paper, { PaperContent } from "./paper"
import ContentGallery from "../components/content-gallery"

interface PapersOverviewProps {
  levelFilter: string[]
}

const PapersOverview: FC<PapersOverviewProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 4
  const allPapers = useStaticQuery<{
    allContentYaml: { nodes: { papers: PaperContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { papers: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          papers {
            authors
            title
            year
            link
            excerpt
            level
            tags
          }
        }
      }
    }
  `).allContentYaml.nodes[0].papers

  const filteredPapers = allPapers.filter((paper) =>
    levelFilter.includes(paper.level)
  )
  let filteredOffSet = offset
  if (filteredOffSet > filteredPapers.length) {
    filteredOffSet = Math.floor(filteredPapers.length / pageLimit) * pageLimit
  }

  const currentPapers = filteredPapers.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLength={filteredPapers.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Papers"
      allTo="/learning-ddd/papers"
    >
      {currentPapers.map((paper, index) => {
        return <Paper key={index} paper={paper}></Paper>
      })}
    </ContentGallery>
  )
}

export default PapersOverview
