import React, { ReactElement, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import DDDCrew from "./ddd-crew"

import BlueButton from "./core/blue-button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"

const DDDCrewOverview = (): ReactElement => {
  const pageLimit = 4
  const [currentPage, setCurrentPage] = useState(1)
  const allDDDCrew = useStaticQuery(graphql`
    query {
      allContentYaml(
        filter: { dddCrew: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          dddCrew {
            excerpt
            name
            to
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allContentYaml.nodes[0].dddCrew
  const totalDDDCrewLength = allDDDCrew.length

  const defineRightArrowVisibility = (newPage) => {
    if (totalDDDCrewLength > pageLimit * newPage) {
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
  const [currentDDDCrew, setCurrentDDDCrew] = useState(
    allDDDCrew.slice(offset, offset + pageLimit)
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
    setCurrentDDDCrew(allDDDCrew.slice(offset, offset + pageLimit))
    if (newPage > 1) {
      setLeftInvisible("")
    } else {
      setLeftInvisible("invisible")
    }
    setRightInvisible(defineRightArrowVisibility(newPage))
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 lg:w-2/3 xl:w-1/2">DDD-crew</h2>
      <BlueButton
        href="https://github.com/ddd-crew"
        label="Get involved with the ddd-crew on Github"
      />
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
          {currentDDDCrew.map((repo, index) => {
            return <DDDCrew key={index} repo={repo}></DDDCrew>
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
      <BlueButton to="/learning-ddd/ddd-crew" label="All DDD-Crew" />
    </div>
  )
}

export default DDDCrewOverview
