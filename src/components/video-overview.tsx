import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import ContentGallery from "./core/content-gallery"
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
  const pageLimit = 3
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

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLength={filteredVideos.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Videos"
      allTo="/learning-ddd/videos"
    >
      {currentVideos.map((video, index) => {
        return <Video key={index} video={video}></Video>
      })}
    </ContentGallery>
  )
}

export default VideosOverview
