import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"

const Podcast = ({ session }) => {
  if (session.podcast) {
    return (
      <div className="group bg-white w-64 rounded-lg shadow-md p-2 m-1">
        <div className="embed-responsive aspect-ratio-16/9">
          <iframe
            title={session.title}
            className="embed-responsive-item"
            allowFullScreen={true}
            src={session.podcast}
            scrolling="no"
            frameBorder={0}
          ></iframe>
        </div>
        <div className="text-sm text-left font-bold link">{session.title}</div>
      </div>
    )
  }
  return <div></div>
}

const Podcasts = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      sessionsYaml {
        sessions {
          title
          podcast
        }
      }
    }
  `)
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <h2 className="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Podcasts</h2>
      <div className="w-11/12 md:w-5/6">
        <div className="flex items-stretch justify-center flex-wrap">
          {data.sessionsYaml.sessions.map((session, index) => {
            return <Podcast session={session}></Podcast>
          })}
        </div>
      </div>
    </div>
  )
}

export default Podcasts
