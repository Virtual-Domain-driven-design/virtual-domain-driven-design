import React, { FC } from "react"
import tw from "twin.macro"

export interface SessionContent {
  id: string
  date: string
  level: string
  tags: string[]
  title: string
  video: string
}

interface SessionProps {
  session: SessionContent
}

const Session: FC<SessionProps> = ({ session }) => {
  return (
    <div tw="bg-white w-96 rounded-lg shadow-md p-2 m-2 flex flex-col">
      <div tw="text-sm text-gray-600">{session.date}</div>
      <div css={[{ paddingTop: "56.25%" }, tw`relative`]}>
        <iframe
          title={session.title}
          tw="absolute top-0 left-0 w-full h-full"
          allowFullScreen={true}
          src={session.video}
          scrolling="no"
          frameBorder={0}
        ></iframe>
      </div>
      <a
        tw="text-sm text-left font-bold text-blue-600 hover:cursor-pointer hover:text-blue-400"
        href={session.video}
        target="_blank"
        rel="noopener noreferrer"
      >
        {session.title}
      </a>
      <div tw="px-1 w-full flex flex-row flex-wrap">
        <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {session.level}
        </div>
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
    </div>
  )
}

export default Session
