import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"

import Layout from "../templates/layout"
import UpcomingSession, {
  UpcomingSessionContent,
} from "../components/upcoming-session"
import SEO from "../components/seo"
import Session, { SessionContent } from "../components/session"

import NoUpcomingImg from "../images/no_upcoming.svg"

interface UpcomingSessionProps {
  sessions: UpcomingSessionContent[]
}

const UpcomingSessions: FC<UpcomingSessionProps> = ({ sessions }) => {
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

interface PastSessionProps {
  sessions: SessionContent[]
}

const PastSessions: FC<PastSessionProps> = ({ sessions }) => {
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

const Sessions: FC = () => {
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
  const upcomingSessions: UpcomingSessionContent[] =
    data.upcoming.nodes[0].upcomingSessions
  const pastSessions: SessionContent[] = data.past.nodes[0].sessions.filter(
    (session: SessionContent) => session.video
  )

  return (
    <Layout>
      <SEO
        title="Virtual Domain-Driven Design meetups and sessions"
        description="An online community and meetup for Domain-Driven Design"
        keywords="Domain-Driven Design,Software Architecture,meetup"
        image={data.upcoming.nodes[0].upcomingSessions[0].img}
      />
      <div className="section" id="Sessions">
        <UpcomingSessions sessions={upcomingSessions}></UpcomingSessions>
        <PastSessions sessions={pastSessions}></PastSessions>
      </div>
    </Layout>
  )
}

export default Sessions
