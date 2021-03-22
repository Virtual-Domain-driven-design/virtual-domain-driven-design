const { sessionPages } = require("./pages")
const createPage = jest.fn()
const reporter = {
  info: () => {
  },
}

describe("The creation of the session pages", () => {
  beforeEach(() => {
    jest.resetAllMocks()
    jest.clearAllMocks()
  })

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
