import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { fireEvent, render } from "@testing-library/react"

// This below import is what gives us the "toBeInTheDocument" method
import "@testing-library/jest-dom/extend-expect"
import LevelFilter from "./level-filter"
import { ContentLevel } from "../sessions/session"

describe("The LevelFilter", () => {
  beforeEach(() => jest.resetAllMocks())

  const setLevelFilter = jest.fn()
  it("should create or check the snapshot", () => {
    const container = renderer
      .create(<LevelFilter setLevelFilter={setLevelFilter} />)
      .toJSON()

    expect(container).toMatchSnapshot()
  })

  it("should render one button for each level", () => {
    const { queryAllByRole } = render(
      <LevelFilter setLevelFilter={setLevelFilter} />
    )
    const result = queryAllByRole("button")

    //TODO test if the right button is active
    expect(result).toHaveLength(4)
  })

  it("should set the correct level with each click", () => {
    const { queryAllByRole } = render(
      <LevelFilter setLevelFilter={setLevelFilter} />
    )
    const buttons = queryAllByRole("button")
    const all = buttons[0]
    const beginner = buttons[1]

    fireEvent.click(all)
    expect(setLevelFilter).toHaveBeenCalledWith([
      ...Object.values(ContentLevel),
    ])

    fireEvent.click(beginner)
    expect(setLevelFilter).toHaveBeenCalledWith([
      ContentLevel.All,
      ContentLevel.Beginner,
    ])
  })
})
