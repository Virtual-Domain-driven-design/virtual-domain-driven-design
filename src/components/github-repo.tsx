import React, { FC } from "react"
import Img from "gatsby-image"

import { Link } from "gatsby"

export interface GithubRepoContent {
  excerpt: string
  img: any
  level: string
  name: string
  tags: string[]
  to: string
}

interface GithubRepoProps {
  githubRepo: GithubRepoContent
}

const GithubRepo: FC<GithubRepoProps> = ({ githubRepo }) => {
  return (
    <Link
      className="ddd-crew group floating-action-button bg-white w-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start"
      to={githubRepo.to}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {githubRepo.name}
        </div>
        <Img
          fluid={githubRepo.img.childImageSharp.fluid}
          className="my-2 w-64 h-32"
          imgStyle={{ objectFit: "contain" }}
        />
        <div className="text-gray-800 text-sm text-center">
          {githubRepo.excerpt}
        </div>
        {/* <div className="px-1 w-full flex flex-row flex-wrap">
          <div className="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
            Level: {githubRepo.level}
          </div>
          {githubRepo.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
              >
                {tag}
              </div>
            )
          })}
        </div> */}
      </div>
    </Link>
  )
}

export default GithubRepo
