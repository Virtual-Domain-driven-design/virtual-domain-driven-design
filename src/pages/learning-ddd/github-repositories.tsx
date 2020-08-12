import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"

import GithubRepo, { GithubRepoContent } from "../../components/github-repo"
import Layout from "../../templates/layout"
import SEO from "../../components/seo"

const DDDCrews: FC = () => {
  const githubRepos = useStaticQuery<{
    allContentYaml: { nodes: { githubRepositories: GithubRepoContent[] }[] }
  }>(graphql`
    query {
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allContentYaml.nodes[0].githubRepositories

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design community knowledge"
        description="DDD Crew community knowledge"
        image
        article
      />
      <div className="w-full flex flex-col items-center">
        <h2 className="my-6 lg:w-2/3 xl:w-1/2">Github Repos</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row flex-wrap items-center w18/20">
            {githubRepos.map((githubRepo, index) => {
              return (
                <GithubRepo key={index} githubRepo={githubRepo}></GithubRepo>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DDDCrews
