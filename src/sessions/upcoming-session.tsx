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
      links {
        label
        url
      }
      ...upcomingImage
    }
  }
`

type SessionLink = {
  url: string
  label: string
}

export type UpcomingSessionContent = {
  id: string
  date: string
  description: string
  img: any
  links: SessionLink[]
  time: string
  title: string
}

type UpcomingSessionProps = {
  session: UpcomingSessionContent
}

const UpcomingSession: FC<UpcomingSessionProps> = ({ session }) => {
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
      <div tw="mt-4 pt-2 space-x-4 border-t-2 border-solid flex items-center justify-start flex-nowrap">
        {session.links.map((link) => {
          return (
            <ThreeDBlueButton
              tw="bg-gray-200 hover:bg-gray-500 text-blue-600 lg:text-xl"
              href={link.url}
            >
              {link.label}
            </ThreeDBlueButton>
          )
        })}
      </div>
    </div>
  )
}

export default UpcomingSession
