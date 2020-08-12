/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { slug: { eq: "README" } }) {
        edges {
          node {
            id
            fileAbsolutePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts ", result.errors)
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const indexOfGithubRepo = node.fileAbsolutePath.indexOf("github-repo")
    const subPath = node.fileAbsolutePath.substring(indexOfGithubRepo)
    const indexOfSlash = subPath.indexOf("/")
    //12 start to remove github-repo-
    const pathName = subPath.substring(12, indexOfSlash)
    console.log("creating page: " + "/learning-ddd/" + pathName)
    createPage({
      path: "/learning-ddd/" + pathName,
      component: require.resolve(`./src/templates/github-repo-layout.tsx`),
      context: { id: node.id },
    })
  })
}
