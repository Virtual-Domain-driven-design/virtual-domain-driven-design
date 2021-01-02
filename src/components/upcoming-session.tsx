import React, { FC } from "react"
import "twin.macro"

import ThreeDBlueButton from "./core/three-d-blue-button"

export interface UpcomingSessionContent {
  date: string
  description: string
  img: any
  links: UpcomingSessionContentLink[]
  time: string
  title: string
}

interface UpcomingSessionContentLink {
  index: string
  label: string
}

interface UpcomingSessionProps {
  session: UpcomingSessionContent
}

const UpcomingSession: FC<UpcomingSessionProps> = ({ session }) => {
  return (
    <div tw="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
      <div tw="font-bold">{session.title}</div>
      <div tw="text-sm text-gray-600">
        {session.date} - {session.time}
      </div>
      <img tw="w-full" alt="" src={session.img}></img>
      <div tw="py-2 text-justify">{session.description}</div>
      <div tw="mt-4 pt-2 space-x-4 border-t border-solid flex items-center justify-start flex-wrap">
        {session.links.map((link, index) => {
          return (
            <ThreeDBlueButton
              tw="bg-gray-200 hover:bg-gray-500 text-blue-600"
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
