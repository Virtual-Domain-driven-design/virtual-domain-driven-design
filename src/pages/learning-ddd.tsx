import React, { ReactElement } from "react"
import Layout from "../templates/layout"
import DDDCrewOverview from "../components/ddd-crew-overview"
import BooksOverview from "../components/books-overview"
import PodcastsOverview from "../components/podcasts-overview"
import SessionsOverview from "../components/sessions-overview"
import VideoOverview from "../components/video-overview"

function LearningDDD(): ReactElement {
  return (
    <Layout>
      <DDDCrewOverview></DDDCrewOverview>
      <VideoOverview></VideoOverview>
      <BooksOverview></BooksOverview>
      <SessionsOverview></SessionsOverview>
      <PodcastsOverview></PodcastsOverview>
    </Layout>
  )
}

export default LearningDDD
