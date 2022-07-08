import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import * as React from "react"

import "twin.macro"
import "styled-components/macro"
import FloatingActionCard from "../components/floating-action-card"

export interface GithubRepoContent {
  excerpt: string
  img: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  level: string
  name: string
  tags: string[]
  to: string
}

interface GithubRepoProps {
  githubRepo: GithubRepoContent
}

const GithubRepo = ({ githubRepo }: GithubRepoProps) => {
  return (
    <FloatingActionCard id={githubRepo.name} to={githubRepo.to}>
      <div tw="flex flex-col items-center justify-start">
        <div tw="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {githubRepo.name}
        </div>
        <GatsbyImage
          image={githubRepo.img.childImageSharp.gatsbyImageData}
          alt={githubRepo.name}
          tw="my-2 w-64 h-32"
          imgStyle={{ objectFit: "contain" }}
        />
        <div tw="text-gray-800 text-sm text-center">{githubRepo.excerpt}</div>
        {/* <div tw="px-1 w-full flex flex-row flex-wrap">
          <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
            Level: {githubRepo.level}
          </div>
          {githubRepo.tags.map((tag) => {
            return (
              <div
                key={tag}
                tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
              >
                {tag}
              </div>
            )
          })}
        </div> */}
      </div>
    </FloatingActionCard>
  )
}

export default GithubRepo
