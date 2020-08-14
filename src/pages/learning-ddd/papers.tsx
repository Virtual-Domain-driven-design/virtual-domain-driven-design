import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"

import Paper, { PaperContent } from "../../components/paper"
import Layout from "../../templates/layout"
import SEO from "../../components/seo"

const Papers: FC = () => {
  const papers = useStaticQuery<{
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

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design papers"
        description="A curated list of Domain-Driven Design and Software Architecture related papers"
      />
      <div className="w-full flex flex-col items-center">
        <h2 className="my-6 lg:w-2/3 xl:w-1/2">Papers</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row flex-wrap items-center w18/20">
            {papers.map((paper, index) => {
              return <Paper key={index} paper={paper}></Paper>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Papers
