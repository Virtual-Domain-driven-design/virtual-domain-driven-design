import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import ContentGallery from "./core/content-gallery"
import Session from "./session"

interface Session {
  level: string
  tags: string[]
  title: string
  video: string
}

interface SessionOverviewProps {
  levelFilter: string[]
}

const SessionOverview: FC<SessionsOverviewProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 5
  const allSessions = useStaticQuery<{
    allContentYaml: { nodes: { sessions: Session[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          sessions {
            title
            level
            video
            tags
          }
        }
      }
    }
  `).allContentYaml.nodes[0].sessions.filter((session) => session.video)

  const filteredSessions = allSessions.filter((session) =>
    levelFilter.includes(session.level)
  )
  let filteredOffSet = offset
  if (filteredOffSet > filteredSessions.length) {
    filteredOffSet = Math.floor(filteredSessions.length / pageLimit) * pageLimit
  }

  const currentSessions = filteredSessions.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLenght={filteredSessions.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="VDDD Sessions"
      allTo="/sessions"
    >
      <div className="flex flex-row flex-wrap items-center w18/20">
        {currentSessions.map((session, index) => {
          return <Session key={index} session={session} />
        })}
      </div>
    </ContentGallery>
  )
}

export default SessionOverview
