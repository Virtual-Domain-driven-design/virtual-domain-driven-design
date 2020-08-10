import React, { ReactElement, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlueButton from "./core/blue-button"

import Session from "./session"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"

const SessionOverview = (): ReactElement => {
  const pageLimit = 5
  const [currentPage, setCurrentPage] = useState(1)
  const allSessions = useStaticQuery(graphql`
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
  const totalSessionsLength = allSessions.length

  const defineRightArrowVisibility = (newPage) => {
    if (totalSessionsLength > pageLimit * newPage) {
      return ""
    } else {
      return "invisible"
    }
  }

  const [leftInvisible, setLeftInvisible] = useState("invisible")
  const [rightInvisible, setRightInvisible] = useState(
    defineRightArrowVisibility(1)
  )

  const offset = (currentPage - 1) * pageLimit
  const [currentSessions, setCurrentSessions] = useState(
    allSessions.slice(offset, offset + pageLimit)
  )

  const handleMoveLeft = () => {
    const newPage = currentPage - 1
    const offset = (newPage - 1) * pageLimit
    pageChange(offset, newPage)
  }

  const handleMoveRight = () => {
    const newPage = currentPage + 1
    const offset = (newPage - 1) * pageLimit
    pageChange(offset, newPage)
  }

  const pageChange = (offset, newPage) => {
    setCurrentPage(newPage)
    setCurrentSessions(allSessions.slice(offset, offset + pageLimit))
    if (newPage > 1) {
      setLeftInvisible("")
    } else {
      setLeftInvisible("invisible")
    }
    setRightInvisible(defineRightArrowVisibility(newPage))
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 lg:w-2/3 xl:w-1/2">VDDD Sessions</h2>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={handleMoveLeft}
            className={
              leftInvisible +
              " transition duration-500 text-blue-700 hover:text-blue-400"
            }
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
            onClick={handleMoveRight}
            className={
              rightInvisible +
              " transition duration-500 text-blue-700 hover:text-blue-400"
            }
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="4x" />
          </button>
        </div>
      </div>
      <BlueButton to="/sessions" label="All Sessions" />
    </div>
  )
}

export default SessionOverview
