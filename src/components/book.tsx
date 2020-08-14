import React, { FC } from "react"
import Img from "gatsby-image"

export interface BookContent {
  author: string
  img: any
  level: string
  tags: string[]
  title: string
}

interface BookProps {
  book: BookContent
}

const Book: FC<BookProps> = ({ book }) => {
  return (
    <div className="group bg-white w-48 h-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start">
      <Img
        className="my-2 w-48 h-64"
        fluid={book.img.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      ></Img>
      <div className="px-1 w-full flex flex-row flex-wrap">
        <div className="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {book.level}
        </div>
        {book.tags.map((tag, index) => {
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

export default Book
