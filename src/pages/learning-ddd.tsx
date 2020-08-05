import React, { ReactElement } from "react"
import Layout from "../templates/layout"
import Books from "../components/books"
import Podcasts from "../components/podcasts"

function LearningDDD(): ReactElement {
  return (
    <Layout>
      <Books></Books>
      <Podcasts></Podcasts>
    </Layout>
  )
}

export default LearningDDD
