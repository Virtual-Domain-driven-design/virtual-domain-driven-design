import React, { ReactElement, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Podcast from "./podcast"
import PodcastPlatforms from "./podcast-platforms"
import BlueButton from "./core/blue-button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"

const PodcastsOverview = (): ReactElement => {
  const pageLimit = 6
  const [currentPage, setCurrentPage] = useState(1)
  const data = useStaticQuery(graphql`
    query {
      sessions: allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          sessions {
            title
            podcast
          }
        }
      }
      podcasts: allContentYaml(
        filter: { podcastsPlatforms: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          podcastsPlatforms {
            name
            url
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
  `)
  const allPodcastsPlatforms = data.podcasts.nodes[0].podcastsPlatforms
  const allPodcasts = data.sessions.nodes[0].sessions.filter(
    (session) => session.podcast != null
  )
  const totalPodcastsLength = allPodcasts.length

  const defineRightArrowVisibility = (newPage) => {
    if (totalPodcastsLength > pageLimit * newPage) {
      return ""
    } else {
      return "invisible"
    }
  }

  const [leftInvisible, setLeftInvisible] = useState("invisible")
  const [rightInvisible, setRightInvisible] = useState(
    defineRightArrowVisibility(1)
  )

  const offset = (currentPage - 1) * pageLimit
  const [currentPodcasts, setCurrentPodcasts] = useState(
    allPodcasts.slice(offset, offset + pageLimit)
  )

  const handleMoveLeft = () => {
    const newPage = currentPage - 1
    const offset = (newPage - 1) * pageLimit
    pageChange(offset, newPage)
  }

  const handleMoveRight = () => {
    const newPage = currentPage + 1
    const offset = (newPage - 1) * pageLimit
    pageChange(offset, newPage)
  }

  const pageChange = (offset, newPage) => {
    setCurrentPage(newPage)
    setCurrentPodcasts(allPodcasts.slice(offset, offset + pageLimit))
    if (newPage > 1) {
      setLeftInvisible("")
    } else {
      setLeftInvisible("invisible")
    }
    setRightInvisible(defineRightArrowVisibility(newPage))
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 lg:w-2/3 xl:w-1/2">Podcasts</h2>
      <div>
        <p className="italic text-justify">
          Listen to the VDDD podcast by clicking on one of the platforms below
        </p>
        <div className="my-1 w-full flex items-center justify-around">
          {allPodcastsPlatforms.map((platform, index) => {
            return (
              <PodcastPlatforms
                key={index}
                platform={platform}
              ></PodcastPlatforms>
            )
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={handleMoveLeft}
            className={
              leftInvisible +
              " transition duration-500 text-blue-700 hover:text-blue-400"
            }
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size="4x" />
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center w18/20">
          {currentPodcasts.map((session, index) => {
            return <Podcast key={index} session={session}></Podcast>
          })}
        </div>
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={handleMoveRight}
            className={
              rightInvisible +
              " transition duration-500 text-blue-700 hover:text-blue-400"
            }
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="4x" />
          </button>
        </div>
      </div>
      <BlueButton to="/learning-ddd/podcasts" label="All Podcasts" />
    </div>
  )
}

export default PodcastsOverview
