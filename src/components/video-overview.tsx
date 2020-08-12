import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import BlueButton from "./core/blue-button"
import Video from "./video"

interface Video {
  level: string
  tags: string[]
  title: string
  video: string
}

interface VideosOverviewProps {
  levelFilter: string[]
}

const VideosOverview: FC<VideosOverviewProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 5
  const allVideos = useStaticQuery<{
    allContentYaml: { nodes: { videos: Video[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { videos: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          videos {
            level
            tags
            title
            video
          }
        }
      }
    }
  `)
    .allContentYaml.nodes.map((node) => node.videos)
    .flat()

  const filteredVideos = allVideos.filter((video) =>
    levelFilter.includes(video.level)
  )
  let filteredOffSet = offset
  if (filteredOffSet > filteredVideos.length) {
    filteredOffSet = Math.floor(filteredVideos.length / pageLimit) * pageLimit
  }

  const currentVideos = filteredVideos.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )
  const leftVisible = filteredOffSet > 0
  const rightVisible = filteredVideos.length > filteredOffSet + pageLimit

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 lg:w-2/3 xl:w-1/2">Video</h2>
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
          {currentVideos.map((video, index) => {
            return <Video key={index} video={video}></Video>
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
      <BlueButton to="/learning-ddd/videos">All Videos</BlueButton>
    </div>
  )
}

export default VideosOverview
