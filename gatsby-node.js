/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { sessionPages, pagesFromMarkdown } = require("./src/gatsby-node-api/pages")
const { getTypeDefs } = require("./src/gatsby-node-api/resolvers")


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentYaml {
        nodes {
          upcomingSessions {
            id
          }
          sessions {
            id
          }
        }
      }
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
            }
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to load content or Mdx ", result.errors)
  }

  const {data} = result
  sessionPages(data.allContentYaml, createPage, reporter)
  pagesFromMarkdown(data.allMdx, createPage, reporter)
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = getTypeDefs(schema)
  createTypes(typeDefs)
}
