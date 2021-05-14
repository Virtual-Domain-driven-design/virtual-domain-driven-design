import * as React from "react"
import { render } from "@testing-library/react"
import "jest-styled-components"
// This below import is what gives us the "toBeInTheDocument" method
import "@testing-library/jest-dom/extend-expect"
import GithubRepoOverview from "./github-repos-overview"
import { allLevels, ContentLevel } from "../components/level-filter"

describe("The github repo overview", () => {
  const getComponent = (filter: string[]) =>
    render(<GithubRepoOverview levelFilter={filter} pageLimit={30} />)

  it("should only display 4 repos when no limit set", () => {
    const { queryAllByRole } = render(
      <GithubRepoOverview levelFilter={allLevels} />
    )

    expect(queryAllByRole("img")).toHaveLength(4)
  })
  it("should find all repos", () => {
    const noFilter = [...Object.values(ContentLevel)]
    const { queryAllByRole } = getComponent(noFilter)
    const allBooks = queryAllByRole("img")
    expect(allBooks.length).toBeGreaterThanOrEqual(13)
  })

  it("should find the repos for beginners", () => {
    const level = [ContentLevel.Beginner]
    const { queryAllByRole } = getComponent(level)
    expect(queryAllByRole("img").length).toBeLessThan(13)
  })

  it("should find the repos for intermediate", () => {
    const level = [ContentLevel.Intermediate]
    const { queryAllByRole } = getComponent(level)
    expect(queryAllByRole("img").length).toBeLessThan(13)
  })

  it("should find the repos for advanced", () => {
    const level = [ContentLevel.Advanced]
    const { queryAllByRole } = getComponent(level)
    expect(queryAllByRole("img").length).toBeLessThan(13)
  })
})
