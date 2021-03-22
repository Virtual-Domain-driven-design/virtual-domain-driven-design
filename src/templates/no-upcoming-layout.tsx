
//Todo: create and use a special template for the upcoming session with the ID "none"

import React from "react"
import "twin.macro"

import Layout from "./layout"
import NoUpcoming from "./../sessions/no-upcoming"

const NoUpcomingSession = () => {
  return (
    <Layout>
      <NoUpcoming />
    </Layout>
  )
}

export default NoUpcomingSession
