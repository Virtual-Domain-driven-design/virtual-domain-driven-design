const gitHubRegex = new RegExp(/(github-repo)/)
const heuristicsRegex = new RegExp(/(\/content\/heuristics\/)/)

/**
 * Create all static pages for sessions and upcoming sessions
 * @param {{nodes:{upcomingSessions:{id: string}[]|null, sessions: {id: string}[]|null}[]}} content
 * @param {{info: function}} reporter
 * @param {function} createPage
 */
const sessionPages = ({ nodes }, createPage, reporter) => {
  nodes
    .filter(n => n.upcomingSessions !== null || n.sessions !== null)
    // eslint-disable-next-line array-callback-return
    .map(({ upcomingSessions, sessions }) => {
      if (!!upcomingSessions) return upcomingSessions.map(session => session)
      if (!!sessions) return sessions.map(session => session)
    })
    .flat()
    .forEach(({ id }) => {
      reporter.info(`Creating page: /sessions/${id}`)
      createPage({
        path: `/sessions/${id}`,
        component: id === "none" ?
          require.resolve(`../templates/no-upcoming-layout.tsx`) :
          require.resolve(`../templates/session-layout.tsx`),
        context: { id },
      })
    })
}

/** Calculate the path to the generated MDX page. The path to README is considered as the base path
 * all other .md in it's own full path +.md (because that is what is usually used in github repo's to link to other md's). Does not work for everything
 * @param {string} absolutePath
 * @return {string} basePath
 */
const getRepoPath = (absolutePath) => {
  const indexOfGithubRepo = absolutePath.indexOf("github-repo")
  const replaceValues = new RegExp(/(github-repo-|\/README.md)/gi)
  const workingPath = absolutePath.replace(replaceValues, "")
  return workingPath.substring(indexOfGithubRepo)
}

/**
 * Create all static pages for GitHub repos
 * @param {{fileAbsolutePath: string, id: string, slug: string, frontmatter: {title:string}}} node
 * @param {{info: function}} reporter
 * @param {function} createPage
 */
const gitHubPages = (node, createPage, reporter) => {
  //DDD-CREW page creation
  if (node.slug.startsWith("LICEN")) return

  const pathName = getRepoPath(node.fileAbsolutePath)
  reporter.info(`creating page: /learning-ddd/${pathName}`)
  createPage({
    path: `/learning-ddd/${pathName}`,
    component: require.resolve(`../templates/github-repo-layout.tsx`),
    context: { id: node.id },
  })
}

/**
 * Create all static pages for the heuristics
 * @param {{fileAbsolutePath: string, id: string, slug: string, frontmatter: {title:string}}} node
 * @param {{info: function}} reporter
 * @param {function} createPage
 */
const heuristicPages = (node, createPage, reporter) => {
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

/**
 * Create all static pages from Mdx nodes
 * @param {{edges: {node: {fileAbsolutePath: string, id: string, slug: string, frontmatter: {title:string}}}[]}} allMdx
 * @param {{info: function}} reporter
 * @param {function} createPage
 */
const pagesFromMarkdown = ({edges}, createPage, reporter) => {
  edges.forEach(({ node }) => {
    gitHubRegex.test(node.fileAbsolutePath) && gitHubPages(node, createPage, reporter)
    heuristicsRegex.test(node.fileAbsolutePath) && heuristicPages(node, createPage, reporter)
  })
}


// todo: do not expose the gitHubPages & heuristicPages anymore
module.exports = {
  sessionPages,
  gitHubPages,
  heuristicPages,
  pagesFromMarkdown
}