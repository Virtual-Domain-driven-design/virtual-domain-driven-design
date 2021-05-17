import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

import ContentGallery from "../components/content-gallery"
import GithubRepo, { GithubRepoContent } from "./github-repo"

const GithubRepoOverview = (props: {
  levelFilter: string[]
  pageLimit?: number
}) => {
  const { levelFilter, pageLimit = 4 } = props
  const [offset, setOffset] = useState(0)
  const allGithubRepos = useStaticQuery<{
    allContentYaml: { nodes: { githubRepositories: GithubRepoContent[] }[] }
  }>(graphql`
    {
      allContentYaml(
        filter: { githubRepositories: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          githubRepositories {
            excerpt
            name
            to
            tags
            level
            img {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `).allContentYaml.nodes[0].githubRepositories

  const filteredGithubRepos = allGithubRepos.filter((githubRepo) =>
    levelFilter.includes(githubRepo.level)
  )
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
      itemsLength={filteredGithubRepos.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Github Repositories"
      allTo="/learning-ddd/github-repositories"
    >
      {currentGithubRepos.map((githubRepo) => {
        return <GithubRepo key={githubRepo.name} githubRepo={githubRepo} />
      })}
    </ContentGallery>
  )
}

export default GithubRepoOverview
