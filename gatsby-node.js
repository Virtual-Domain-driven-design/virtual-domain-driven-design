/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
    reporter.panic("failed to create posts ", result.errors)
  }

  // Create a page per session or upcomingsession
  result.data.allContentYaml.nodes
    .filter(({ upcomingSessions, sessions }) => upcomingSessions || sessions)
    .map(({ upcomingSessions, sessions }) => {
      if (upcomingSessions) {
        return upcomingSessions
      }
      if (sessions) {
        return sessions
      }
    })
    .flat()
    .forEach(({ id }) => {
      console.log("Creating page: /sessions/" + id)
      createPage({
        path: "/sessions/" + id,
        component: require.resolve(`./src/templates/session-layout.tsx`),
        context: { id: id },
      })
    })

  result.data.allMdx.edges.forEach(({ node }) => {
    //DDD-CREW page creation
    if (
      !(
        node.fileAbsolutePath.includes("LICENSE.md") ||
        node.fileAbsolutePath.includes("LICENCE.md")
      ) &&
      node.fileAbsolutePath.includes("github-repo")
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
    //Heuristics page creation for MD files
    if (node.fileAbsolutePath.includes("/content/heuristics/")) {
      const indexOfHeuristics = node.fileAbsolutePath.indexOf("heuristics/")
      const subPath = node.fileAbsolutePath.substring(indexOfHeuristics)
      const indexOfLastSlash = subPath.lastIndexOf("/")

      const path = subPath.substring(0, indexOfLastSlash + 1)
      const name = subPath.substring(indexOfLastSlash + 1, subPath.length - 3)

      console.log("creating page: " + "/patterns-and-heuristics/" + path + name)
      createPage({
        path: "/patterns-and-heuristics/" + path + name,
        component: require.resolve(`./src/templates/github-repo-layout.tsx`),
        context: { id: node.id },
      })
    }
  })
}
