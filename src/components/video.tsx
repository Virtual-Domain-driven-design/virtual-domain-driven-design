import React, { FC } from "react"

export interface VideoContent {
  title: string
  level: string
  tags: string[]
  video: string
}

interface VideoProps {
  video: VideoContent
}

const Video: FC<VideoProps> = ({ video }) => {
  return (
    <div className="session bg-white w-64 rounded-lg shadow-md p-2 m-2 flex flex-col">
      <div className="videoframe">
        <iframe
          title={video.title}
          className="videostream"
          allowFullScreen={true}
          src={video.video}
          scrolling="no"
          frameBorder={0}
        ></iframe>
      </div>
      <a
        className="text-sm text-left font-bold link"
        href={video.video}
        target="_blank"
        rel="noopener noreferrer"
      >
        {video.title}
      </a>
      <div className="px-1 w-full flex flex-row flex-wrap">
        <div className="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {video.level}
        </div>
        {video.tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
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
