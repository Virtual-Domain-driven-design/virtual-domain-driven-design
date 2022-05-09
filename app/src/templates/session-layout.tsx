import { graphql } from "gatsby"
import React from "react"
import "twin.macro"

import Layout from "./layout"
import SessionBlock from "./../sessions/session-block"
import SessionHero from "./../sessions/session-hero"
import SEO from "../components/seo"
import { UpcomingSessionContent } from "../sessions/upcoming-session"
import { SessionContent } from "../sessions/session"

const SessionLayout = ({ pageContext, data }) => {
  //const sessionId = `sessions-${pageContext.id}`

  let session
  let sessionBlock
  if (data.sessionsYaml) {
    session = data.sessionsYaml.sessions.find(
      (session: SessionContent) => session.id === pageContext.id
    )
    sessionBlock = (
      <SessionBlock
        description={session.description}
        title={session.title}
        podcast={session.podcast}
        video={session.video}
      />
    )
  } else if (data.upcomingSessionsYaml) {
    session = data.upcomingSessionsYaml.upcomingSessions.find(
      (upcomingSession: UpcomingSessionContent) =>
        upcomingSession.id === pageContext.id
    )
    sessionBlock = (
      <SessionBlock
        description={session.description}
        title={session.title}
        links={session.links}
        video={session.video}
      />
    )
  }
  const keywords = session.tags.join(", ")
  return (
    <Layout>
      <SEO
        image={session.img.publicURL}
        title={session.title}
        description={session.description}
        keywords={keywords}
      />
      <SessionHero
        date={session.date}
        img={session.img}
        level={session.level}
        tags={session.tags}
        title={session.title}
      />
      <div tw="flex flex-col items-center m-8">
        {sessionBlock}
      </div>
    </Layout>
  )
}

export default SessionLayout

export const query = graphql`
  query($id: String) {
    sessionsYaml: contentYaml(sessions: { elemMatch: { id: { eq: $id } } }) {
      ...session
    }
    upcomingSessionsYaml: contentYaml(
      upcomingSessions: { elemMatch: { id: { eq: $id } } }
    ) {
      ...upcomingSession
    }
  }
`
