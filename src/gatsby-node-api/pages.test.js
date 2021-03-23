const { sessionPages, gitHubPages, heuristicPages, pagesFromMarkdown } = require("./pages")
const samples = require("../../__mocks__/samples")

const createPage = jest.fn()
const reporter = {
  info: () => {
  },
}
describe("When the static pages are generated", () => {
  beforeEach(() => {
    jest.resetAllMocks()
    jest.clearAllMocks()
  })
  describe("The creation of the session pages", () => {
    const nodesWithSessions = [
      {
        upcomingSessions: null,
        sessions: null,
      },
      {
        upcomingSessions: [{ id: "66" }],
        sessions: null,
      },
      {
        upcomingSessions: null,
        sessions: null,
      },
      {
        upcomingSessions: null,
        sessions: [{ id: "65" }, { id: "64" }, { id: "63" }],
      },
    ]

    it("should filter out null values and build paths with IDs", () => {
      sessionPages({ nodes: nodesWithSessions }, createPage, reporter)

      expect(createPage).toHaveBeenCalledTimes(4)

      expect(createPage).toHaveBeenCalledWith({
        path: "/sessions/66",
        component: expect.stringContaining("/templates/session-layout.tsx"),
        context: { id: "66" },
      })

      expect(createPage).toHaveBeenCalledWith({
        path: "/sessions/63",
        component: expect.stringContaining("/templates/session-layout.tsx"),
        context: { id: "63" },
      })
    })

    it("should render the special template when no upcoming session exists", () => {
      const nodes = [
        {
          upcomingSessions: [{ id: "none" }],
          sessions: null,
        },
        {
          upcomingSessions: null,
          sessions: null,
        },
      ]
      sessionPages({ nodes }, createPage, reporter)

      expect(createPage).toHaveBeenCalledTimes(1)

      expect(createPage).toHaveBeenCalledWith({
        path: "/sessions/none",
        component: expect.stringContaining("/templates/no-upcoming-layout.tsx"),
        context: { id: "none" },
      })
    })
  })

  describe("The creation of pages from markdown", () => {
    it("should generate heuristics and GitHub pages", () => {
      let heuristicPageCounter = 0
      let githubPageCounter = 0
      createPage.mockImplementation(({ component }) => {
        if(component.indexOf("heuristic-layout.tsx") > 0) heuristicPageCounter +=1
        if(component.indexOf("github-repo-layout.tsx") > 0) githubPageCounter +=1
      })

      pagesFromMarkdown(samples.allMdx, createPage, reporter)
      expect(createPage).toHaveBeenCalledTimes(38)
      expect(heuristicPageCounter).toEqual(1)
      expect(githubPageCounter).toEqual(37)
    })
  })

  describe("The creation of the gitHub pages", () => {

    it("should filter out License files", () => {
      gitHubPages(samples.licenceMdxNode, createPage, reporter)

      expect(createPage).toHaveBeenCalledTimes(0)
    })

    it("should generate entry pages from README files", () => {
      gitHubPages(samples.readmeMdxNodes[0], createPage, reporter)
      gitHubPages(samples.readmeMdxNodes[1], createPage, reporter)

      expect(createPage).toHaveBeenCalledTimes(2)
      expect(createPage).toHaveBeenCalledWith({
        path:"/learning-ddd/ddd-crew-welcome-to-ddd",
        component:expect.stringContaining("/templates/github-repo-layout.tsx"),
        context: { id: samples.readmeMdxNodes[0].id }
      })
      expect(createPage).toHaveBeenCalledWith({
        path:"/learning-ddd/saturn2019-architecture-island-workshop/outcomes",
        component:expect.stringContaining("/templates/github-repo-layout.tsx"),
        context: { id: samples.readmeMdxNodes[1].id }
      })
    })

    it("should keep the name and the reference for non-readme files", () => {
      gitHubPages(samples.nonRootMdxNode, createPage, reporter)

      expect(createPage).toHaveBeenCalledWith({
        path: "/learning-ddd/ddd-crew-bounded-context-canvas/tools/html-version/instructions.md",
        component: expect.any(String),
        context: { id: samples.nonRootMdxNode.id }
      })
    })
  })

  describe("The creation of the heuristic pages", () => {
    //Todo => test + functionality for the path
    it("should use the right path, template and context", () => {
      heuristicPages(samples.heuristicMdxNode, createPage, reporter)
      expect(createPage).toHaveBeenCalledWith({
        path: "/patterns-and-heuristics/heuristics/design-heuristics/eventstorming-dont-fill-in-the-gaps",
        component: expect.stringContaining("/templates/heuristic-layout.tsx"),
        context: { id: "a968a5ee-d1ff-5821-aff9-bd7284921428", name: "eventstorming-dont-fill-in-the-gaps" }
      })
    })
  })
})

