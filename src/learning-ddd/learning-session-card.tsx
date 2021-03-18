import React from "react"
import "twin.macro"
import VideoEmbed from "../components/video-embed"
import { SessionContent } from "../sessions/session"

type LearningSessionCardProps = {
  session: SessionContent
}

const LearningSessionCard = (
  learningSessionCardProps: LearningSessionCardProps
) => {
  return (
    <div tw="bg-white w-96 rounded-lg shadow-md p-2 m-2 flex flex-col">
      <div tw="text-sm text-gray-600">
        {learningSessionCardProps.session.date}
      </div>
      <VideoEmbed
        title={learningSessionCardProps.session.title}
        video={learningSessionCardProps.session.video}
      />
      <a
        tw="text-sm text-left font-bold text-blue-600 hover:cursor-pointer hover:text-blue-400"
        href={learningSessionCardProps.session.video}
        target="_blank"
        rel="noopener noreferrer"
      >
        {learningSessionCardProps.session.title}
      </a>
      <div tw="px-1 w-full flex flex-row flex-wrap">
        <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {learningSessionCardProps.session.level}
        </div>
        {learningSessionCardProps.session.tags.map((tag, index) => {
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

export default LearningSessionCard
