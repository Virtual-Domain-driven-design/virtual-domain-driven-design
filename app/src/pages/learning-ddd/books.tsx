import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"
import tw from "twin.macro"

import Book, { BookContent } from "../../learning-ddd/book"
import Layout from "../../templates/layout"
import SEO from "../../components/seo"

const initialLengthSize = 21

const Books: FC = () => {
  const [booksLength, setBooksLength] = useState(initialLengthSize)

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

  const areAllBooksVisible = booksLength > allBooks.length

  const books = allBooks.slice(0, booksLength)

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design books"
        description="A curated list of Domain-Driven Design and Software Architecture related Books"
      />
      <div tw="w-full flex flex-col items-center justify-start">
        <h2 tw="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Books</h2>
        <div tw="w-11/12 md:w-5/6">
          <div tw="flex items-stretch justify-center flex-wrap">
            {books.map((book) => {
              return <Book key={book.title} book={book} />
            })}
          </div>
        </div>
        <button
          onClick={() => setBooksLength(booksLength + initialLengthSize)}
          tw="my-4 bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded"
          css={areAllBooksVisible && tw`invisible`}
        >
          Load more
        </button>
      </div>
    </Layout>
  )
}

export default Books
