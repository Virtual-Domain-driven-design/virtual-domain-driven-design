import React, { FC } from "react"

import Hero from "../components/hero"
import Conferences from "../components/conferences"
import Communities from "../components/communities"
import Sponsors from "../components/sponsors"
import Organisers from "../components/organisers"
import Layout from "../templates/layout"

const Index: FC = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Conferences></Conferences>
      <Communities></Communities>
      <Sponsors></Sponsors>
      <Organisers></Organisers>
    </Layout>
  )
}

export default Index
