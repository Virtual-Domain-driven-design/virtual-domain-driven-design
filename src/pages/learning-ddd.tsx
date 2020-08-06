import React, { ReactElement } from "react"
import Layout from "../templates/layout"
import DDDCrew from "../components/ddd-crew"
import Books from "../components/books"
import Podcasts from "../components/podcasts"

function LearningDDD(): ReactElement {
  return (
    <Layout>
      <DDDCrew></DDDCrew>
      <Books></Books>
      <Podcasts></Podcasts>
    </Layout>
  )
}

export default LearningDDD
