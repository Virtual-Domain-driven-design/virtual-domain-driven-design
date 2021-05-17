import React, { FC } from "react"

import Hero from "../home/hero"
import Conferences from "../home/conferences"
import Communities from "../home/communities"
import Sponsors from "../home/sponsors"
import Organisers from "../home/organisers"
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
