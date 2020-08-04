import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../components/navbar"
import UpcomingSession from "../components/upcoming-session"

import NoUpcomingImg from "../images/no_upcoming.svg"

const UpcomingSessions = ({ data }) => {
  const sessions = data.upcomingSessionsYaml.upcomingSessions
  if (sessions.length > 0) {
    console.log("YES")
    return (
      <div className="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2>Upcoming Sessions</h2>
        <div className="flex flex-col items-center justify-start">
          {sessions.map((session, index) => {
            return (
              <UpcomingSession
                index={index}
                session={session}
              ></UpcomingSession>
            )
          })}
        </div>
      </div>
    )
  }
  return (
    <div className="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
      <h2>Upcoming Sessions</h2>
      <div className="flex flex-col items-center justify-start">
        <NoUpcomingImg className="h-64 mb-6" />
        <div>More sessions are coming to you eventually consistent...</div>
        <a
          className="p-4 mt-6 bg-blue-400 floating-action-button text-white"
          href="https://sessionize.com/virtual-ddd-meetup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Propose a session
        </a>
      </div>
    </div>
  )
}

function Sessions(): ReactElement {
  const data = useStaticQuery(graphql`
    query {
      upcomingSessionsYaml {
        upcomingSessions {
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
          <UpcomingSessions data={data}></UpcomingSessions>
        </div>
      </div>
    </>
  )
}

export default Sessions
