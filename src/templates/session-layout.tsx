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
          title={session.title}
          description={session.description}
          keywords={keywords}
        />
        <div tw="flex flex-col items-center">
          <div tw="bg-white w-2/3 rounded-lg shadow-md p-2 m-2 flex flex-col">
            <div tw="text-sm text-gray-600">{session.date}</div>
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
            <a
              tw="text-sm text-left font-bold text-blue-600 hover:cursor-pointer hover:text-blue-400"
              href={session.video}
              target="_blank"
              rel="noopener noreferrer"
            >
              {session.title}
            </a>
            <div tw="text-justify">{session.description}</div>
            <div tw="px-1 w-full flex flex-row flex-wrap">
              <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
                Level: {session.level}
              </div>
              {session.tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
                  >
                    {tag}
                  </div>
                )
              })}
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
