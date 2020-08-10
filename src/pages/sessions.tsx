import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import UpcomingSession from "../components/upcoming-session"

import NoUpcomingImg from "../images/no_upcoming.svg"
import Layout from "../templates/layout"

import Session from "../components/session"

const UpcomingSessions = ({ sessions }) => {
  if (sessions.length > 0) {
    return (
      <div className="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2>Upcoming Sessions</h2>
        <div className="flex flex-col items-center justify-start">
          {sessions.map((session, index) => {
            return (
              <UpcomingSession key={index} session={session}></UpcomingSession>
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
        <h2 className="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Past Sessions</h2>
        <div className="w-11/12 md:w-5/6">
          <div className="flex items-stretch justify-center flex-wrap">
            {sessions.map((session, index) => {
              return <Session key={index} session={session} />
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
      upcoming: allContentYaml(
        filter: { upcomingSessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
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
      past: allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          sessions {
            title
            date
            level
            video
            tags
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="section" id="Sessions">
        <UpcomingSessions
          sessions={data.upcoming.nodes[0].upcomingSessions}
        ></UpcomingSessions>
        <PastSessions
          sessions={data.past.nodes[0].sessions.filter(
            (session) => session.video
          )}
        ></PastSessions>
      </div>
    </Layout>
  )
}

export default Sessions
