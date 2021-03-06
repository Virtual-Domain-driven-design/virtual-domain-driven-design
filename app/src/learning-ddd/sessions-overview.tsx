import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

import ContentGallery from "../components/content-gallery"
import { ContentLevel } from "../components/level-filter"
import { SessionContent } from "../sessions/session"
import Session from "./learning-session-card"

type SessionOverviewProps = {
  levelFilter: ContentLevel[]
}

const SessionOverview = ({ levelFilter = [] }: SessionOverviewProps) => {
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
          ...session
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
