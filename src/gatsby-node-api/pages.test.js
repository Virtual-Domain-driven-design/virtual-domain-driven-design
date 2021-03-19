const { sessionPages } = require("./pages")
const createPage = jest.fn()
const reporter = { info: () => {} }

describe("The session pages", () => {
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
      sessions: [{ id: "65" }, { id: "64" }, { id: "63" }]
    }
  ]

  it("should filter out null values", () => {
      sessionPages({ nodes: nodesWithSessions }, createPage, reporter)

      // expect(createPage).toHaveBeenCalledTimes(4)

      expect(createPage).toHaveBeenCalledWith({
        path:'/sessions/66',
        component: expect.stringContaining('/templates/session-layout.tsx'),
        context: {id: "66"}
      })

      expect(createPage).toHaveBeenCalledWith({
        path:'/sessions/63',
        component: expect.stringContaining('/templates/session-layout.tsx'),
        context: {id: "63"}
      })
    })
})
