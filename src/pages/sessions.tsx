import React, { ReactElement, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import NavBar from "../components/navbar"

import NoUpcomingImg from "../images/no_upcoming.svg"

const UpcomingSession = ({ data }) => {
  if ((data.contentJson.upcoming_sessions.length = 0)) {
    return (
      <div className="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2>Upcoming Sessions</h2>
        <div className="flex flex-col items-center justify-start">
          <NoUpcomingImg />
          <div>More sessions are coming to you eventually consistent...</div>
          <a
            className="p-4 mt-6 bg-blue-400 floating-action-button text-white"
            href="https://sessionize.com/virtual-ddd-meetup"
            target="_blank"
          >
            Propose a session
          </a>
        </div>
      </div>
    )
  }
  return (
    <div className="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
      <h2>Upcoming Sessions</h2>
      <div className="flex flex-col items-center justify-start"></div>
    </div>
  )
}

function Sessions(): ReactElement {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        upcoming_sessions {
          date
          description
          img
          time
          title
          links {
            label
            url
          }
        }
      }
    }
  `)
  return (
    <>
      <div id="top" className="font-sans">
        <NavBar></NavBar>
        <div className="section" id="Sessions">
          <UpcomingSession data={data}></UpcomingSession>
        </div>
      </div>
    </>
  )
}

export default Sessions
