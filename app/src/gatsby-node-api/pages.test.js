const {
  sessionPages,
  pagesFromMarkdown,
  sessionSearchPage,
} = require("./pages")
const samples = require("../../__mocks__/samples")

const createPage = jest.fn()
const reporter = {
  info: () => {},
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
        component: expect.stringMatching(/templates(.)+session-layout\.tsx/g),
        context: { id: "66" },
      })

      expect(createPage).toHaveBeenCalledWith({
        path: "/sessions/63",
        component: expect.stringMatching(/templates(.)+session-layout\.tsx/g),
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
        component: expect.stringMatching(
          /templates(.)+no-upcoming-layout\.tsx/g
        ),
        context: { id: "none" },
      })
    })

    it("should add the all sessions with content to a search template", () => {
      const allSessions = [
        {
          upcomingSessions: [{ id: "none" }],
          sessions: null,
        },
        ...nodesWithSessions,
      ]
      sessionSearchPage({ nodes: allSessions }, createPage, reporter)

      expect(createPage).toHaveBeenCalledTimes(1)

      expect(createPage).toHaveBeenCalledWith({
        path: "/search",
        component: expect.stringMatching(/templates(.)+search-layout\.tsx/g),
        context: expect.objectContaining({
          allSessions: [{ id: "66" }, { id: "65" }, { id: "64" }, { id: "63" }],
          options: {
            indexStrategy: "Prefix match",
            searchSanitizer: "Lower Case",
            TitleIndex: true,
            DescriptionIndex: true,
            TagIndex: true,
            SearchByTerm: true,
          },
        }),
      })
    })
  })

  describe("The creation of pages from markdown", () => {
    it("should generate heuristics and GitHub pages", () => {
      let heuristicPageCounter = 0
      let githubPageCounter = 0
      createPage.mockImplementation(({ component }) => {
        if (component.indexOf("heuristic-layout.tsx") > 0)
          heuristicPageCounter += 1
        if (component.indexOf("github-repo-layout.tsx") > 0)
          githubPageCounter += 1
      })

      pagesFromMarkdown(samples.allMdx, createPage, reporter)
      expect(createPage).toHaveBeenCalledTimes(38)
      expect(heuristicPageCounter).toEqual(1)
      expect(githubPageCounter).toEqual(37)
    })
  })

  describe("The creation of the gitHub pages", () => {
    it("should filter out License files", () => {
      pagesFromMarkdown({ edges: samples.licenceMdxNode }, createPage, reporter)

      expect(createPage).toHaveBeenCalledTimes(0)
    })

    it("should generate entry pages from README files", () => {
      pagesFromMarkdown({ edges: samples.readmeMdxNodes }, createPage, reporter)

      expect(createPage).toHaveBeenCalledTimes(2)
      expect(createPage).toHaveBeenCalledWith({
        path: "/learning-ddd/ddd-crew-welcome-to-ddd",
        component: expect.stringMatching(
          /templates(.)+github-repo-layout\.tsx/g
        ),
        context: { id: "0120c7eb-b769-5f70-b487-5340c0a1b717" },
      })
      expect(createPage).toHaveBeenCalledWith({
        path: "/learning-ddd/saturn2019-architecture-island-workshop/outcomes",
        component: expect.stringMatching(
          /templates(.)+github-repo-layout\.tsx/g
        ),
        context: { id: "b2a05e2d-7dfe-5816-b603-cf3a900a8932" },
      })
    })

    it("should keep the name and the reference for non-readme files", () => {
      pagesFromMarkdown({ edges: samples.nonRootMdxNode }, createPage, reporter)

      expect(createPage).toHaveBeenCalledWith({
        path:
          "/learning-ddd/ddd-crew-bounded-context-canvas/tools/html-version/instructions.md",
        component: expect.any(String),
        context: { id: "52adaef0-a54c-506c-9168-22fd6a9bedd5" },
      })
    })

    it("should keep the name and the reference for deep references too", () => {
      pagesFromMarkdown(
        { edges: samples.deepResourceNode },
        createPage,
        reporter
      )

      expect(createPage).toHaveBeenCalledWith({
        path:
          "/learning-ddd/ddd-crew-bounded-context-canvas/resources/model-traits-worksheet-FR.md",
        component: expect.any(String),
        context: { id: "c9456f4e-80ef-583a-984f-8fd3c703cb15" },
      })
    })
  })

  describe("The creation of the heuristic pages", () => {
    it("should use the right path, template and context", () => {
      pagesFromMarkdown(
        { edges: samples.heuristicMdxNode },
        createPage,
        reporter
      )
      expect(createPage).toHaveBeenCalledWith({
        path:
          "/patterns-and-heuristics/heuristics/design-heuristics/eventstorming-dont-fill-in-the-gaps",
        component: expect.stringMatching(/templates(.)+heuristic-layout\.tsx/g),
        context: {
          id: "a968a5ee-d1ff-5821-aff9-bd7284921428",
          name: "eventstorming-dont-fill-in-the-gaps",
        },
      })
    })
  })
})
