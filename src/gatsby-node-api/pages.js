/**
 * Create all static pages for sessions and upcoming sessions
 * @param {{nodes:{upcomingSessions:{id: string}[]|null, sessions: {id: string}[]|null}[]}} content
 * @param {{info: function}} reporter
 * @param {function} createPage
 */
const sessionPages = ({nodes}, createPage, reporter) => {
  nodes
    .filter(n => n.upcomingSessions !== null || n.sessions !== null)
    .map(({ upcomingSessions, sessions }) => {
      if(!!upcomingSessions) return upcomingSessions.map(session => session)
      if(!!sessions) return sessions.map(session => session)
    })
    .flat()
    .forEach(({ id } ) => {
      reporter.info(`Creating page: /sessions/${id}`)
      createPage({
        path: `/sessions/${id}`,
        component: require.resolve(`../templates/session-layout.tsx`),
        context: { id },
      })
    })
}
/**
 * Create all static pages for GitHub repos
 * @param {{fileAbsolutePath: string, id: string}} node
 * @param {{info: function}} reporter
 * @param {function} createPage
 */
function gitHubPages(node, createPage, reporter) {
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
    reporter.info(`creating page: /learning-ddd/${pathName}`)
    createPage({
      path: `/learning-ddd/${pathName}`,
      component: require.resolve(`../templates/github-repo-layout.tsx`),
      context: { id: node.id },
    })
  }
}

/**
 * Create all static pages for the heuristics
 * @param {{fileAbsolutePath: string, id: string}} node
 * @param {{info: function}} reporter
 * @param {function} createPage
 */
const heuristicPages = (node, createPage, reporter) => {
  //Heuristics page creation for MD files
  if (node.fileAbsolutePath.includes("/content/heuristics/")) {
    const indexOfHeuristics = node.fileAbsolutePath.indexOf("heuristics/")
    const subPath = node.fileAbsolutePath.substring(indexOfHeuristics)
    const indexOfLastSlash = subPath.lastIndexOf("/")

    const path = subPath.substring(0, indexOfLastSlash + 1)
    const name = subPath.substring(indexOfLastSlash + 1, subPath.length - 3)

    const relPath = `/patterns-and-heuristics/${path}${name}`
    reporter.info(`creating page: ${relPath}`)
    createPage({
      path: relPath,
      component: require.resolve(`../templates/heuristic-layout.tsx`),
      context: { id: node.id, name },
    })
  }
}

module.exports = {
  sessionPages,
  gitHubPages,
  heuristicPages
}
