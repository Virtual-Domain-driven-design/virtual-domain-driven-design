import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "twin.macro"
import "styled-components/macro"

import Layout from "../templates/layout"
import { SessionContent } from "../sessions/session"
import SEO from "../components/seo"
import UpcomingSession, {
  UpcomingSessionContent,
} from "../sessions/upcoming-session"
import SessionSearch from "../sessions/session-search"

type UpcomingSessionProps = {
  sessions: UpcomingSessionContent[]
}

const upcomingSessionAvailable = (sessions: UpcomingSessionContent[]) =>
  sessions.length > 0 &&
  sessions.filter((s) => parseInt(s.id, 10) > 0).length > 0

const UpcomingSessions = ({ sessions }: UpcomingSessionProps) =>
  upcomingSessionAvailable(sessions) ? (
    <div tw="my-8 w-full lg:w-4/5 lg:w-2/3 xl:w-1/2">
      <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
        Upcoming Sessions
      </h2>
      <div tw="flex flex-col items-center justify-start">
        {sessions.map((session) => (
          <UpcomingSession key={parseInt(session.id, 10)} session={session} />
        ))}
      </div>
    </div>
  ) : (
    <div />
  )

const PastSessions = (props: { sessions: SessionContent[] }) => {
  return (
    <div tw="w-full flex flex-col items-center justify-start">
      <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
        All Sessions
      </h2>
      <SessionSearch sessions={props.sessions} />
    </div>
  )
}

const Sessions = () => {
  const data = useStaticQuery(graphql`
    query {
      upcoming: allContentYaml(
        filter: { upcomingSessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          ...upcomingSession
        }
      }
      past: allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          ...session
        }
      }
    }
  `)
  const upcomingSessions: UpcomingSessionContent[] =
    data.upcoming.nodes[0].upcomingSessions
  const pastSessions: SessionContent[] = data.past.nodes[0].sessions.filter(
    (session: SessionContent) => session.video
  )
  const allSessions = [
    ...(upcomingSessions as SessionContent[]).filter((s) => s.id !== "none"),
    ...pastSessions,
  ]

  return (
    <Layout>
      <SEO
        title="Virtual Domain-Driven Design meetups and sessions"
        description="An online community and meetup for Domain-Driven Design"
        keywords="Domain-Driven Design,Software Architecture,meetup"
        image={upcomingSessions[0].img.publicURL}
      />
      <div
        tw="bg-gray-100 flex flex-col items-center justify-center"
        id="Sessions"
      >
        <UpcomingSessions sessions={upcomingSessions} />
        <PastSessions sessions={allSessions} />
      </div>
    </Layout>
  )
}

export default Sessions
