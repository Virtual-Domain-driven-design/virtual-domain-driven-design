import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import React from "react"

import "twin.macro"
import "styled-components/macro"
import ThreeDBlueButton from "../components/three-d-blue-button"
import ParsedContent from "../components/link-parser"
import { graphql } from "gatsby"

export const upcomingSession = graphql`
  fragment upcomingSession on ContentYaml {
    upcomingSessions {
      id
      title
      date
      time
      description
      level
      tags
      video
      links {
        label
        url
      }
      ...upcomingImage
    }
  }
`

export type SessionLink = {
  url: string
  label: string
}

export type UpcomingSessionContent = {
  id: string
  date: string
  description: string
  img: {
    childImageSharp: { gatsbyImageData: IGatsbyImageData }
    publicURL?: string
  }
  level: string
  links: SessionLink[]
  tags: string[]
  time: string
  video: string
  title: string
}

type UpcomingSessionProps = {
  session: UpcomingSessionContent
}

const UpcomingSession = ({ session }: UpcomingSessionProps) => {
  const linkToSession = `/sessions/${session.id}`

  return (
    <div tw="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
      <div tw="font-bold">{session.title}</div>
      <div tw="text-sm text-gray-600">
        {session.date} - {session.time}
      </div>
      <GatsbyImage
        image={session.img.childImageSharp.gatsbyImageData}
        alt={session.title}
        tw="md:h-96 h-64 w-full object-cover"
      />
      <div tw="py-2 text-justify lg:text-base md:text-sm sm:text-xs ">
        <ParsedContent text={session.description} />
      </div>
      <div tw="mt-4 pt-2 space-x-4 border-t-2 border-solid">
        <div tw="flex items-center mt-4 h-14 overflow-hidden ">
          <div tw="flex flex-row flex-wrap w-3/5  ">
            <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
              Level: {session.level}
            </div>
            {session.tags.map((tag) => {
              return (
                <div
                  key={tag}
                  tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
                >
                  {tag}
                </div>
              )
            })}
          </div>
          <div tw="w-2/5 flex">
            <ThreeDBlueButton tw="flex-shrink-0" to={linkToSession}>
              More info
            </ThreeDBlueButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingSession
