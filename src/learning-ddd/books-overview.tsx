import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import Book, { BookContent } from "./book"
import ContentGallery from "../components/content-gallery"

interface BooksOverviewProps {
  levelFilter: string[]
}

const BooksOverview: FC<BooksOverviewProps> = ({ levelFilter }) => {
  const [offset, setOffset] = useState(0)
  const pageLimit = 5
  const allBooks = useStaticQuery<{
    allContentYaml: { nodes: { books: BookContent[] }[] }
  }>(graphql`
    {
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
                gatsbyImageData(layout: FULL_WIDTH)
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

  return (
    <ContentGallery
      filteredOffSet={filteredOffSet}
      itemsLength={filteredBooks.length}
      pageLimit={pageLimit}
      setOffset={setOffset}
      title="Books"
      allTo="/learning-ddd/books"
    >
      {currentBooks.map((book) => {
        return <Book key={book.title} book={book} />
      })}
    </ContentGallery>
  )
}

export default BooksOverview
