import React, { FC } from "react"

export interface PaperContent {
  authors: string
  link: string
  level: string
  excerpt: string
  tags: string[]
  title: string
  year: string
}

interface PaperProps {
  paper: PaperContent
}

const GithubRepo: FC<PaperProps> = ({ paper }) => {
  return (
    <a
      className="ddd-crew group floating-action-button bg-white w-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start"
      href={paper.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center justify-start">
        <div className="m-2 h-16 font-semibold text-gray-800 text-sm text-center">
          {paper.title}
        </div>
        <div className="text-gray-700 text-xs italic text-center">
          {paper.authors} - {paper.year}
        </div>
        <div className="text-gray-800 text-sm text-center">{paper.excerpt}</div>
        <div className="px-1 w-full flex flex-row flex-wrap">
          <div className="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
            Level: {paper.level}
          </div>
          {paper.tags.map((tag, index) => {
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
    </a>
  )
}

export default GithubRepo
