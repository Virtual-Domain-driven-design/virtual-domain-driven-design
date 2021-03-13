import React, { FC } from "react"
import "twin.macro"

import FloatingActionCard from "../components/floating-action-card"

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
    <FloatingActionCard key={paper.title} href={paper.link}>
      <div tw="flex flex-col items-center justify-start">
        <div tw="m-2 h-16 font-semibold text-gray-800 text-sm text-center">
          {paper.title}
        </div>
        <div tw="text-gray-700 text-xs italic text-center">
          {paper.authors} - {paper.year}
        </div>
        <div tw="text-gray-800 text-sm text-center">{paper.excerpt}</div>
        <div tw="px-1 w-full flex flex-row flex-wrap">
          <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
            Level: {paper.level}
          </div>
          {paper.tags.map((tag, index) => {
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
    </FloatingActionCard>
  )
}

export default GithubRepo
