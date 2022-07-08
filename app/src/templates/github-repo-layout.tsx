import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import "twin.macro"
import "styled-components/macro"

import Layout from "./layout"
import GithubLink, { GithubLinkLocation } from "../plugins/github-link"
type MdxNode = {
  id: string
  body: string
  headings: [
    {
      value: string
    }
  ]
}

interface GithubRepoFile {
  location: GithubLinkLocation
  data: {
    mdx: MdxNode
  }
}
const GithubRepoLayout = ({ location, data: { mdx } }: GithubRepoFile) => {
  return (
    <Layout>
      <div tw="flex flex-col items-center" id="github repository">
        <div tw="prose prose-sm sm:prose lg:prose-lg xl:prose-lg lg:w-2/3">
          <MDXProvider
            components={{
              a: (props) => <GithubLink location={location} {...props} />,
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
