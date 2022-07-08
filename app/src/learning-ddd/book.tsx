import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import * as React from "react"
import "twin.macro"
import "styled-components/macro"

export interface BookContent {
  author: string
  img: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  level: string
  tags: string[]
  title: string
}

interface BookProps {
  book: BookContent
}

const Book = ({ book }: BookProps) => {
  return (
    <div tw="bg-white w-64 h-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start">
      <GatsbyImage
        image={book.img.childImageSharp.gatsbyImageData}
        alt={book.title}
        tw="my-2 w-64 h-64"
        imgStyle={{ objectFit: "contain" }}
      />
      <div tw="px-1 w-full flex flex-row flex-wrap">
        <div tw="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {book.level}
        </div>
        {book.tags.map((tag) => {
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

export default Book
