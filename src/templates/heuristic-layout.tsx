/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql } from "gatsby"
import HyvorTalk from "hyvor-talk-react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "../components/seo"
import "twin.macro"

import Layout from "./layout"
import HeuristicHero from "./../heuristics/heuristic-hero"

const GithubRepoLayout = ({ data: { mdx } }) => {
  const heuristicId = mdx.frontmatter.title

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        keywords={mdx.frontmatter.tags}
      />
      <HeuristicHero
        title={mdx.frontmatter.title}
        excerpt={mdx.frontmatter.excerpt}
      />
      <div tw="flex flex-col items-center" id="heuristic">
        <div tw="prose prose-sm sm:prose lg:prose-lg xl:prose-lg lg:w-2/3 p-4 m-4 shadow">
          <MDXProvider components={{}}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <div tw="bg-white w-2/6 rounded-lg shadow-md p-2 m-2 flex flex-col">
          <HyvorTalk.Embed websiteId={3384} id={heuristicId} />
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
      frontmatter {
        tags
        authors
        excerpt
        title
        category
        type
      }
    }
  }
`
