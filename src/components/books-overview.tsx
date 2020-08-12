import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import Book from "./book"
import BlueButton from "./core/blue-button"

interface Book {
  author: string
  img: string
  level: string
  tags: string[]
  title: string
}

interface BooksOverviewProps {
  levelFilter: string[]
}

const BooksOverview: FC<BooksOverviewProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 6
  const allBooks = useStaticQuery<{
    allContentYaml: { nodes: { books: Book[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { books: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          books {
            author
            title
            level
            tags
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allContentYaml.nodes[0].books

  const filteredBooks = allBooks.filter((book) =>
    levelFilter.includes(book.level)
  )
  let filteredOffSet = offset
  if (filteredOffSet > filteredBooks.length) {
    filteredOffSet = Math.floor(filteredBooks.length / pageLimit) * pageLimit
  }

  const currentBooks = filteredBooks.slice(
    filteredOffSet,
    filteredOffSet + pageLimit
  )
  const leftVisible = filteredOffSet > 0
  const rightVisible = filteredBooks.length > filteredOffSet + pageLimit

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 lg:w-2/3 xl:w-1/2">Books</h2>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet - pageLimit)}
            className={[
              leftVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size="4x" />
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center w18/20">
          {currentBooks.map((book, index) => {
            return <Book key={index} book={book}></Book>
          })}
        </div>
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet + pageLimit)}
            className={[
              rightVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="4x" />
          </button>
        </div>
      </div>

      <BlueButton to="/learning-ddd/books">All Books</BlueButton>
    </div>
  )
}

export default BooksOverview
