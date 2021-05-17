import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

import ContentGallery from "../components/content-gallery"
import Podcast, { PodcastContent } from "./podcast"

const PodcastsOverview = (props: { levelFilter: string[] }) => {
  const { levelFilter } = props
  const [offset, setOffset] = useState(0)
  const pageLimit = 3
  const allPodcasts = useStaticQuery<{
    allContentYaml: { nodes: { sessions: PodcastContent[] }[] }
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
      itemsLength={filteredPodcasts.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Podcasts"
      allTo="/learning-ddd/podcasts"
    >
      {currentPodcasts.map((session) => {
        return <Podcast key={session.title} session={session} />
      })}
    </ContentGallery>
  )
}

export default PodcastsOverview
