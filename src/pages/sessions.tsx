import { graphql, useStaticQuery } from "gatsby"
import NoUpcomingImg from "../images/no_upcoming.svg"
import React, { FC, useState } from "react"
import tw from "twin.macro"

import Layout from "../templates/layout"
import Session, { SessionContent } from "../sessions/session"
import SEO from "../components/seo"
import ThreeDBlueButton from "./../components/core/three-d-blue-button"
import UpcomingSession, { UpcomingSessionContent } from "../sessions/upcoming-session"

const initialLengthSize = 15

type UpcomingSessionProps = {
  sessions: UpcomingSessionContent[]
}

const UpcomingSessions: FC<UpcomingSessionProps> = ({ sessions }) => {
  if (sessions.length > 0 && sessions[0].title) {
    return (
      <div tw="my-8 w-full lg:w-4/5 lg:w-2/3 xl:w-1/2">
        <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
          Upcoming Sessions
        </h2>
        <div tw="flex flex-col items-center justify-start">
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
    <div tw="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
      <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
        Upcoming Sessions
      </h2>
      <div tw="flex flex-col items-center justify-start">
        <NoUpcomingImg tw="h-64 mb-6" />
        <div tw="my-4">
          More sessions are coming to you eventually consistent...
        </div>
        <ThreeDBlueButton href="https://sessionize.com/virtual-ddd-meetup">
          {" "}
          Propose a session
        </ThreeDBlueButton>
      </div>
    </div>
  )
}

type PastSessionProps = {
  allSessions: SessionContent[]
}

const PastSessions: FC<PastSessionProps> = ({ allSessions }) => {
  const [sessionsLength, setSessionsLength] = useState(initialLengthSize)
  const areAllSessionsVisible = sessionsLength > allSessions.length

  const sessions = allSessions.slice(0, sessionsLength)
  return (
    <div tw="w-full flex flex-col items-center justify-start">
      <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
        Past Sessions
      </h2>
      <div tw="w-11/12 md:w-5/6">
        <div tw="flex items-stretch justify-center flex-wrap">
          {sessions.map((session, index) => {
            return <Session key={index} session={session} />
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

const Sessions: FC = () => {
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
        image={upcomingSessions[0].img}
      />
      <div
        tw="bg-gray-100 flex flex-col items-center justify-center"
        id="Sessions"
      >
        <UpcomingSessions sessions={upcomingSessions}></UpcomingSessions>
        <PastSessions allSessions={pastSessions}></PastSessions>
      </div>
    </Layout>
  )
}

export default Sessions
