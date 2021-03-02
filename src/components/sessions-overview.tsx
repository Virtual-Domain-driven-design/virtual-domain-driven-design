import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import ContentGallery from "./core/content-gallery"
import Session, { SessionContent } from "./session"

interface SessionOverviewProps {
  levelFilter: string[]
}

const SessionOverview: FC<SessionOverviewProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 3
  const allSessions = useStaticQuery<{
    allContentYaml: { nodes: { sessions: SessionContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          ...sessionOverviewQuery
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
      itemsLength={filteredSessions.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="VDDD Sessions"
      allTo="/sessions"
    >
      {currentSessions.map((session) => {
        return <Session key={session.id} session={session} />
      })}
    </ContentGallery>
  )
}

export default SessionOverview
