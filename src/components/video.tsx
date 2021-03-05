import React, { FC } from "react"
import "twin.macro"
import VideoEmbed from "./video-embed"

export type VideoContent = {
  title: string
  level: string
  tags: string[]
  video: string
}

type VideoProps = {
  video: VideoContent
}

const Video: FC<VideoProps> = ({ video }) => {
  return (
    <div tw="bg-white w-96 rounded-lg shadow-md p-2 m-2 flex flex-col">
      <VideoEmbed title={video.title} video={video.video} />
      <a
        tw="text-sm text-left font-bold hover:text-blue-400"
        href={video.video}
        target="_blank"
        rel="noopener noreferrer"
      >
        {video.title}
      </a>
      <div tw="px-1 w-full flex flex-row flex-wrap">
        <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {video.level}
        </div>
        {video.tags.map((tag, index) => {
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

export default Video
