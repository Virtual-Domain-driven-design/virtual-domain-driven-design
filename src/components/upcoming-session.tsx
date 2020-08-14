import React, { FC } from "react"

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
    <div className="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
      <div className="font-bold">{session.title}</div>
      <div className="text-sm text-gray-600">
        {session.date} - {session.time}
      </div>
      <img className="w-full" alt="" src={session.img}></img>
      <div className="py-2 text-justify">{session.description}</div>
      <div className="mt-4 pt-2 border-t border-solid flex items-center justify-start flex-wrap">
        {session.links.map((link, index) => {
          return (
            <a
              key={index}
              className="bg-gray-200 floating-action-button p-2 m-2"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default UpcomingSession
