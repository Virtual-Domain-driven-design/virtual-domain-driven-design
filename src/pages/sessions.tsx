import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"

import Layout from "../templates/layout"
import Session, { SessionContent } from "../sessions/session"
import SEO from "../components/seo"
import UpcomingSession, {
  UpcomingSessionContent,
} from "../sessions/upcoming-session"
const initialLengthSize = 10

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

type PastSessionProps = {
  allSessions: SessionContent[]
}

const PastSessions = ({ allSessions }: PastSessionProps) => {
  const [sessionsLength, setSessionsLength] = useState(initialLengthSize)
  const areAllSessionsVisible = sessionsLength > allSessions.length

  const sessions = allSessions.slice(0, sessionsLength)
  return (
    <div tw="w-full flex flex-col items-center justify-start">
      <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
        Past Sessions
      </h2>
      <div tw="w-11/12 md:w-5/6">
        <div tw="flex flex-wrap justify-center">
          {sessions.map((session) => {
            return <Session key={session.id} session={session} />
          })}
        </div>
      </div>
      <button
        onClick={() => setSessionsLength(sessionsLength + initialLengthSize)}
        tw="my-4 bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded"
        css={areAllSessionsVisible && tw`invisible`}
      >
        Load more
      </button>
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
        <PastSessions allSessions={pastSessions} />
      </div>
    </Layout>
  )
}

export default Sessions
