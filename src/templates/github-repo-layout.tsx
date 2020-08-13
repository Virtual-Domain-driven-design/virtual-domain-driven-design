/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import MarkdownLink from "../plugins/markdown-link"

import Layout from "./layout"

const GithubRepoLayout = ({ location, data: { mdx } }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center" id="markdown">
        <div className="markdown w-3/5">
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
