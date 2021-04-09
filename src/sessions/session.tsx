import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
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
  img: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
}

type SessionProps = {
  session: SessionContent
}

const Session: FC<SessionProps> = ({ session }) => {
  const linkToSession = "/sessions/" + session.id
  return (
    <div
      tw="md:flex shadow-lg mx-6 md:mx-auto my-4 max-w-lg lg:max-w-2xl md:h-64"
      css={{ height: "fit-content" }}
    >
      <GatsbyImage
        image={session.img.childImageSharp.gatsbyImageData}
        tw="h-full w-full md:w-1/3 object-cover rounded-lg rounded-r-none h-2/5 md:h-64"
        alt={session.title}
      />
      <div tw="w-full md:w-2/3 px-4 py-2 bg-white rounded-lg h-3/5 md:h-64 lg:text-base md:text-sm sm:text-xs ">
        <h2 tw="text-gray-800 font-medium mr-auto">{session.title}</h2>
        <p tw="text-gray-700 mt-4 break-all line-clamp-3 lg:line-clamp-4">
          {session.description}
        </p>
        <div tw="flex items-center mt-2 mb-2 h-14 overflow-hidden">
          <div tw="flex flex-wrap w-3/5 h-14">
            <div tw="flex-shrink-0 leading-none text-xs bg-blue-700 text-white rounded-md p-1 m-1 h-6">
              Level: {session.level}
            </div>
            {session.tags.map((tag) => {
              return (
                <div
                  key={tag}
                  tw="flex-shrink-0 leading-none text-xs bg-gray-200 text-gray-700 rounded-md p-1 m-1 h-6"
                >
                  {tag}
                </div>
              )
            })}
          </div>
          <div tw="flex w-2/5 content-end align-baseline">
            <ThreeDBlueButton to={linkToSession}>More info</ThreeDBlueButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session
