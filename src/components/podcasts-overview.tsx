import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import ContentGallery from "./core/content-gallery"
import Podcast from "./podcast"

interface Podcast {
  title: string
  level: string
  podcast: string
  tags: string[]
}

interface PodcastsOverviewProps {
  levelFilter: string[]
}

const PodcastsOverview: FC<PodcastsOverviewProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 5
  const allPodcasts = useStaticQuery<{
    allContentYaml: { nodes: { sessions: Podcast[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          sessions {
            title
            level
            podcast
            tags
          }
        }
      }
    }
  `).allContentYaml.nodes[0].sessions.filter(
    (session) => session.podcast != null
  )

  const filteredPodcasts = allPodcasts.filter((podcast) =>
    levelFilter.includes(podcast.level)
  )
  let filteredOffSet = offset
  if (filteredOffSet > filteredPodcasts.length) {
    filteredOffSet = Math.floor(filteredPodcasts.length / pageLimit) * pageLimit
  }

  const currentPodcasts = filteredPodcasts.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLenght={filteredPodcasts.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Podcasts"
      allTo="/learning-ddd/podcasts"
    >
      {currentPodcasts.map((session, index) => {
        return <Podcast key={index} session={session}></Podcast>
      })}
    </ContentGallery>
  )
}

export default PodcastsOverview
