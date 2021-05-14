import * as React from "react"
import { render } from "@testing-library/react"
import "jest-styled-components"
// This below import is what gives us the "toBeInTheDocument" method
import "@testing-library/jest-dom/extend-expect"
import BooksOverview from "./books-overview"
import { allLevels, ContentLevel } from "../components/level-filter"

describe("The books overview", () => {
  const getComponent = (filter: string[]) =>
    render(<BooksOverview levelFilter={filter} pageLimit={30} />)

  it("should only display 5 books when no limit set", () => {
    const { queryAllByRole } = render(<BooksOverview levelFilter={allLevels} />)

    expect(queryAllByRole("img")).toHaveLength(5)
  })
  it("should find all books", () => {
    const noFilter = [...Object.values(ContentLevel)]
    const { queryAllByRole } = getComponent(noFilter)
    const allBooks = queryAllByRole("img")
    expect(allBooks.length).toBeGreaterThanOrEqual(15)
  })

  it("should find the books for beginners", () => {
    const level = [ContentLevel.Beginner]
    const { queryAllByRole } = getComponent(level)
    expect(queryAllByRole("img").length).toBeLessThan(15)
  })

  it("should find the books for intermediate", () => {
    const level = [ContentLevel.Intermediate]
    const { queryAllByRole } = getComponent(level)
    expect(queryAllByRole("img").length).toBeLessThan(15)
  })

  it("should find the books for advanced", () => {
    const level = [ContentLevel.Advanced]
    const { queryAllByRole } = getComponent(level)
    expect(queryAllByRole("img").length).toBeLessThan(15)
  })
})
