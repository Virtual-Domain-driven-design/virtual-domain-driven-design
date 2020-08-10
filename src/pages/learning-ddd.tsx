import React, { ReactElement } from "react"
import Layout from "../templates/layout"
import DDDCrewOverview from "../components/ddd-crew-overview"
import BooksOverview from "../components/books-overview"
import PodcastsOverview from "../components/podcasts-overview"
import SessionsOverview from "../components/sessions-overview"
import VideoOverview from "../components/video-overview"

import SEO from "../components/seo"

function LearningDDD(): ReactElement {
  return (
    <Layout>
      <SEO
        title="Learn Domain-Driven Design"
        description="The one place of Curated DDD content"
        image
        article
      />
      <DDDCrewOverview></DDDCrewOverview>
      <VideoOverview></VideoOverview>
      <BooksOverview></BooksOverview>
      <SessionsOverview></SessionsOverview>
      <PodcastsOverview></PodcastsOverview>
    </Layout>
  )
}

export default LearningDDD
