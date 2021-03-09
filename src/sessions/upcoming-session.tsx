import Img from "gatsby-image"
import React, { FC } from "react"
import "twin.macro"

import ThreeDBlueButton from "../components/core/three-d-blue-button"
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
  img: any
  links: SessionLink[]
  tags: string[]
  time: string
  video: string
  title: string
}

type UpcomingSessionProps = {
  session: UpcomingSessionContent
}

const UpcomingSession: FC<UpcomingSessionProps> = ({ session }) => {
    const linkToSession = "/sessions/" + session.id

  return (
    <div tw="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
      <div tw="font-bold">{session.title}</div>
      <div tw="text-sm text-gray-600">
        {session.date} - {session.time}
      </div>
      <Img
        tw="w-full object-cover"
        fluid={session.img.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      ></Img>
      <div tw="py-2 text-justify">{session.description}</div>
      <div tw="mt-4 pt-2 space-x-4 border-t-2 border-solid">
        <div tw="flex items-center mt-4 h-14 overflow-hidden ">
          <div tw="flex flex-row flex-wrap w-3/5  ">
            {session.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
                >
                  {tag}
                </div>
              )
            })}
          </div>
          <div tw="w-2/5 flex">
            <ThreeDBlueButton tw="flex-shrink-0" to={linkToSession}>More info</ThreeDBlueButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingSession
