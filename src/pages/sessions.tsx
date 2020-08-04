import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../components/navbar"
import UpcomingSession from "../components/upcoming-session"

import NoUpcomingImg from "../images/no_upcoming.svg"

const UpcomingSessions = ({ sessions }) => {
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

const PastSessions = ({ sessions }) => {
  if (sessions.length > 0) {
    return (
      <div className="w-full flex flex-col items-center justify-start">
        <h2>Upcoming Sessions</h2>
        <div className="w-11/12 md:w-5/6">
          <div className="flex items-stretch justify-center flex-wrap">
            {sessions.map((session, index) => {
              if (session.video) {
                return (
                  <div
                    index={index}
                    className="bg-white w-64 rounded-lg shadow-md p-2 m-1"
                  >
                    <div className="text-sm text-gray-600">{sessions.date}</div>
                    <div className="videoframe">
                      <iframe
                        className="videostream"
                        allowFullScreen={true}
                        src={session.video}
                        scrolling="no"
                        frameBorder={0}
                      ></iframe>
                    </div>
                    <a
                      className="text-sm text-left font-bold link"
                      href={session.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {session.title}
                    </a>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
  return <div></div>
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
      sessionsYaml {
        sessions {
          title
          date
          description
          podcast
          time
          video
        }
      }
    }
  `)
  return (
    <>
      <div id="top" className="font-sans">
        <NavBar></NavBar>
        <div className="section" id="Sessions">
          <UpcomingSessions
            sessions={data.upcomingSessionsYaml.upcomingSessions}
          ></UpcomingSessions>
          <PastSessions sessions={data.sessionsYaml.sessions}></PastSessions>
        </div>
      </div>
    </>
  )
}

export default Sessions
