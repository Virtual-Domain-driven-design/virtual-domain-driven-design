import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "../components/navbar"

import NoUpcomingImg from "../images/no_upcoming.svg"

const UpcomingSessions = ({ data }) => {
  const sessions = data.contentJson.upcoming_sessions
  if (sessions.length > 0) {
    console.log("YES")
    return (
      <div className="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2>Upcoming Sessions</h2>
        <div className="flex flex-col items-center justify-start">
          {sessions.map((session, index) => {
            return (
              <div
                key={index}
                className="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2"
              >
                <div className="font-bold">{session.title}</div>
                <div className="text-sm text-gray-600">
                  {session.date} - {session.time}
                </div>
                <img className="w-full" alt="" src={session.img}></img>
                <div className="py-2 text-justify">{session.description}</div>
                <div className="mt-4 pt-2 border-t border-solid flex items-center justify-start flex-wrap">
                  {session.links.map((link, index) => {
                    return (
                      <a
                        className="bg-gray-200 floating-action-button p-2 m-2"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>
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
          <UpcomingSessions data={data}></UpcomingSessions>
        </div>
      </div>
    </>
  )
}

export default Sessions
