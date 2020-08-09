import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../templates/layout"

import Book from "../../components/book"

function LearningDDD(): ReactElement {
  const books = useStaticQuery(graphql`
    query {
      allContentYaml(
        filter: { books: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
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
  `).allContentYaml.nodes[0].books

  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <h2 className="my-6 lg:w-2/3 xl:w-1/2">Books</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row flex-wrap items-center w18/20">
            {books.map((book, index) => {
              return <Book key={index} book={book}></Book>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LearningDDD
