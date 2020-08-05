import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Book = ({ book }) => {
  return (
    <div className="group bg-white w-48 rounded-lg shadow-md m-2 flex flex-col items-center justify-start">
      <Img
        className="my-2 w-48 h-64"
        fluid={book.img.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      ></Img>
      <div className="px-1 w-full flex flex-row flex-wrap">
        {book.tags.map((tag, index) => {
          return (
            <div className="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1">
              {tag}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Books = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      allBooksYaml {
        edges {
          node {
            books {
              author
              title
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
    }
  `)
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <h2 className="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Books</h2>
      <div className="w-11/12 md:w-5/6">
        <div className="flex justify-center flex-wrap">
          {data.allBooksYaml.edges[0].node.books.map((book, index) => {
            return <Book book={book}></Book>
          })}
        </div>
      </div>
    </div>
  )
}

export default Books
