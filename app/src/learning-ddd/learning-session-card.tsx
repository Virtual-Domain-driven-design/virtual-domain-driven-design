import * as React from "react"
import "twin.macro"
import VideoEmbed from "../components/video-embed"
import { SessionContent } from "../sessions/session"

type LearningSessionCardProps = {
  session: SessionContent
}

const LearningSessionCard = (props: LearningSessionCardProps) => {
  const { session } = props
  return (
    <div tw="bg-white w-96 rounded-lg shadow-md p-2 m-2 flex flex-col">
      <div tw="text-sm text-gray-600">{session.date}</div>
      <VideoEmbed title={session.title} video={session.video} />
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
    </div>
  )
}

export default LearningSessionCard
