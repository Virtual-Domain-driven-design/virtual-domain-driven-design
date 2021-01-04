/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { FC } from "react"
import "twin.macro"

import Layout from "./layout"
import MarkdownLink from "../plugins/markdown-link"

const GithubRepoLayout: FC = ({ location, data: { mdx } }) => {
  return (
    <Layout>
      <div tw="flex flex-col items-center" id="github repository">
        <div tw="prose prose-sm sm:prose lg:prose-lg xl:prose-lg lg:w-2/3">
          <MDXProvider
            components={{
              a: (props) => <MarkdownLink location={location} {...props} />,
              // NEED TO ESCAPE BECAUSE OF A BUG
              embed: () => <div></div>,
            }}
          >
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </Layout>
  )
}

export default GithubRepoLayout

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      headings(depth: h1) {
        value
      }
    }
  }
`
