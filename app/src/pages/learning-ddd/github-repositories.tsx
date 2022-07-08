import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"
import tw from "twin.macro"
import 'styled-components/macro'

import GithubRepo, { GithubRepoContent } from "../../learning-ddd/github-repo"
import Layout from "../../templates/layout"
import SEO from "../../components/seo"

const initialLengthSize = 21

const DDDCrews: FC = () => {
  const [githubReposLength, setGithubReposLength] = useState(initialLengthSize)

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

  const areAllGithubReposVisible = githubReposLength > allGithubRepos.length

  const githubRepos = allGithubRepos.slice(0, githubReposLength)

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design Github repositories"
        description="A curated list of Domain-Driven Design and Software Architecture related Github repositories"
      />
      <div tw="w-full flex flex-col items-center justify-start">
        <h2 tw="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Github Repositories</h2>
        <div tw="w-11/12 md:w-5/6">
          <div tw="flex items-stretch justify-center flex-wrap">
            {githubRepos.map((githubRepo) => {
              return (
                <GithubRepo key={githubRepo.name} githubRepo={githubRepo} />
              )
            })}
          </div>
        </div>
        <button
          onClick={() =>
            setGithubReposLength(githubReposLength + initialLengthSize)
          }
          tw="my-4 bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded"
          css={areAllGithubReposVisible && tw`invisible`}
        >
          Load more
        </button>
      </div>
    </Layout>
  )
}

export default DDDCrews
