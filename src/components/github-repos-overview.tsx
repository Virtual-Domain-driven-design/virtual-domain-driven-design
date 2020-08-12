import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import ContentGallery from "./core/content-gallery"
import DDDCrew from "./ddd-crew"

interface GithubRepo {
  excerpt: string
  img: string
  name: string
  to: string
}

interface GithubRepoProps {
  levelFilter: string[]
}

const GithubRepoOverview: FC<GithubRepoProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 4
  const allGithubRepos = useStaticQuery<{
    allContentYaml: { nodes: { dddCrew: GithubRepo[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { dddCrew: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          dddCrew {
            excerpt
            name
            to
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allContentYaml.nodes[0].dddCrew

  //TODO
  const filteredGithubRepos = allGithubRepos
  // const filteredGithubRepos = allGithubRepos.filter((githubRepo) =>
  //   levelFilter.includes(githubRepo.level)
  // )
  let filteredOffSet = offset
  if (filteredOffSet > filteredGithubRepos.length) {
    filteredOffSet =
      Math.floor(filteredGithubRepos.length / pageLimit) * pageLimit
  }

  const currentGithubRepos = filteredGithubRepos.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLenght={filteredGithubRepos.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Github Repositories"
      allTo="/learning-ddd/ddd-crew"
    >
      <div className="flex flex-row flex-wrap items-center w18/20">
        {currentGithubRepos.map((repo, index) => {
          return <DDDCrew key={index} repo={repo}></DDDCrew>
        })}
      </div>
    </ContentGallery>
  )
}

export default GithubRepoOverview
