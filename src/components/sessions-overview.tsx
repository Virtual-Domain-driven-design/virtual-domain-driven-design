import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import BlueButton from "./core/blue-button"
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
  const leftVisible = filteredOffSet > 0
  const rightVisible = filteredSessions.length > filteredOffSet + pageLimit

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 lg:w-2/3 xl:w-1/2">VDDD Sessions</h2>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet - pageLimit)}
            className={[
              leftVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size="4x" />
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center w18/20">
          {currentSessions.map((session, index) => {
            return <Session key={index} session={session} />
          })}
        </div>
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet + pageLimit)}
            className={[
              rightVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="4x" />
          </button>
        </div>
      </div>
      <BlueButton to="/sessions">All Sessions</BlueButton>
    </div>
  )
}

export default SessionOverview
