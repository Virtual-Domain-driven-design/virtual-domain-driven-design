import { graphql } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"
import "twin.macro"
import ThreeDBlueButton from "../components/three-d-blue-button"

export const session = graphql`
  fragment session on ContentYaml {
    sessions {
      id
      title
      date
      time
      description
      level
      tags
      video
      podcast
      ...sessionImage
    }
  }
`

export enum ContentLevel {
  All = "all",
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

export type SessionContent = {
  id: string
  date: string
  title: string
  time: string
  description: string
  level: ContentLevel
  tags: string[]
  video: string
  podcast?: string
  img: any
}

type SessionProps = {
  session: SessionContent
}

const Session: FC<SessionProps> = ({ session }) => {
  const linkToSession = "/sessions/" + session.id
  return (
    <div tw="md:flex shadow-lg mx-6 md:mx-auto my-4 max-w-lg lg:max-w-2xl h-96 md:h-64">
      <Img
        tw="h-full w-full md:w-1/3 object-cover rounded-lg rounded-r-none h-2/5 md:h-64"
        fluid={session.img.childImageSharp.fluid}
        alt="bag"
      />
      <div tw="w-full md:w-2/3 px-4 py-2 bg-white rounded-lg h-3/5 md:h-64">
        <h2 tw="text-base md:text-xl text-gray-800 font-medium mr-auto">
          {session.title}
        </h2>
        <p tw="text-xs md:text-sm text-gray-700 mt-4 break-all line-clamp-3 lg:line-clamp-4">
          {session.description}
        </p>
        <div tw="flex items-center mt-2 mb-2 h-14 overflow-hidden">
          <div tw="flex flex-wrap w-3/5 h-14">
            <div tw="flex-shrink-0 leading-none text-xs bg-blue-700 text-white rounded-md p-1 m-1 h-6">
              Level: {session.level}
            </div>
            {session.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  tw="flex-shrink-0 leading-none text-xs bg-gray-200 text-gray-700 rounded-md p-1 m-1 h-6"
                >
                  {tag}
                </div>
              )
            })}
          </div>
          <div tw="w-2/5 flex">
            <ThreeDBlueButton tw="flex-shrink-0 " to={linkToSession}>
              More info
            </ThreeDBlueButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session
