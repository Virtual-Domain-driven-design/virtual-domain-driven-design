/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts ", result.errors)
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    if (
      !(
        node.fileAbsolutePath.includes("LICENSE.md") ||
        node.fileAbsolutePath.includes("LICENCE.md")
      )
    ) {
      const indexOfGithubRepo = node.fileAbsolutePath.indexOf("github-repo")
      const subPath = node.fileAbsolutePath.substring(indexOfGithubRepo)
      let indexOfSlash
      // We want to process README as the base path, and all other .md in it's own full path +.md (because that is what is usually used in github repo's to link to other md's). Does not work for everything
      if (subPath.indexOf("/README") !== -1) {
        indexOfSlash = subPath.indexOf("/README")
      } else {
        indexOfSlash = subPath.length
      }
      //12 start to remove github-repo-
      const pathName = subPath.substring(12, indexOfSlash)
      console.log("creating page: " + "/learning-ddd/" + pathName)
      createPage({
        path: "/learning-ddd/" + pathName,
        component: require.resolve(`./src/templates/github-repo-layout.tsx`),
        context: { id: node.id },
      })
    }
  })
}
