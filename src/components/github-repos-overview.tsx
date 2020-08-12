import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import BlueButton from "./core/blue-button"
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
  const leftVisible = filteredOffSet > 0
  const rightVisible = filteredGithubRepos.length > filteredOffSet + pageLimit

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 lg:w-2/3 xl:w-1/2">DDD-crew</h2>
      <BlueButton href="https://github.com/ddd-crew">
        Get involved with the ddd-crew on Github
      </BlueButton>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet - pageLimit)}
            className={[
              leftVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size="4x" />
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center w18/20">
          {currentGithubRepos.map((repo, index) => {
            return <DDDCrew key={index} repo={repo}></DDDCrew>
          })}
        </div>
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet + pageLimit)}
            className={[
              rightVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="4x" />
          </button>
        </div>
      </div>
      <BlueButton to="/learning-ddd/ddd-crew">All DDD-Crew</BlueButton>
    </div>
  )
}

export default GithubRepoOverview
