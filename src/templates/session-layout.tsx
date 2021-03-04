/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { graphql } from "gatsby"
import HyvorTalk from "hyvor-talk-react"
import React, { FC } from "react"
import tw from "twin.macro"

import Layout from "./layout"
import SessionHero from "./../sessions/session-hero"
import SEO from "../components/seo"

const SessionLayout: FC = ({ pageContext, data }) => {
  if (data.sessionsYaml) {
    const session = data.sessionsYaml.sessions.find(
      (session) => session.id === pageContext.id
    )
    const sessionId = "sessions-" + session.id
    const keywords = session.tags.join(", ")
    return (
      <Layout>
        <SEO
          image={session.img}
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
          <div tw="flex xl:flex-row flex-col items-center w-2/3 m-4">
            <div tw="xl:w-2/3 w-full m-4 ">
              <div tw="text-center xl:w-4/5 rounded-lg shadow-md p-2">
                {session.description}
              </div>
            </div>
            <div tw="xl:w-1/3 w-full rounded-lg shadow-md p-1 m-2">
              <div css={[{ paddingTop: "56.25%" }, tw`relative`]}>
                <iframe
                  title={session.title}
                  tw="absolute top-0 left-0 w-full h-full"
                  allowFullScreen={true}
                  src={session.video}
                  scrolling="no"
                  frameBorder={0}
                ></iframe>
              </div>
            </div>
          </div>
          <div tw="bg-white w-2/3 rounded-lg shadow-md p-2 m-2 flex flex-col">
            <HyvorTalk.Embed websiteId={3384} id={sessionId} />
          </div>
        </div>
      </Layout>
    )
  }
  if (data.upcomingSessionsYaml) {
    return <Layout>Upcoming on the way</Layout>
  }
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
