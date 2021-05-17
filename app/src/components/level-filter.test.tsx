import * as React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { fireEvent, render } from "@testing-library/react"

// This below import is what gives us the "toBeInTheDocument" method
import "@testing-library/jest-dom/extend-expect"
import LevelFilter, { allLevels, ContentLevel } from "./level-filter"

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
    const { getByTestId } = render(
      <LevelFilter setLevelFilter={setLevelFilter} />
    )

    expect(getByTestId(ContentLevel.All)).toBeDefined()
    expect(getByTestId(ContentLevel.Beginner)).toBeDefined()
    expect(getByTestId(ContentLevel.Intermediate)).toBeDefined()
    expect(getByTestId(ContentLevel.Advanced)).toBeDefined()
  })

  it("should set the correct level with each click", () => {
    const { getByTestId } = render(
      <LevelFilter setLevelFilter={setLevelFilter} />
    )
    const all = getByTestId(ContentLevel.All)
    const beginner = getByTestId(ContentLevel.Beginner)
    const intermediate = getByTestId(ContentLevel.Intermediate)
    const advanced = getByTestId(ContentLevel.Advanced)

    fireEvent.click(all)
    expect(setLevelFilter).toHaveBeenCalledWith(allLevels)

    fireEvent.click(beginner)
    expect(setLevelFilter).toHaveBeenCalledWith([
      ContentLevel.All,
      ContentLevel.Beginner,
    ])

    fireEvent.click(intermediate)
    expect(setLevelFilter).toHaveBeenCalledWith([
      ContentLevel.All,
      ContentLevel.Intermediate,
    ])

    fireEvent.click(advanced)
    expect(setLevelFilter).toHaveBeenCalledWith([
      ContentLevel.All,
      ContentLevel.Advanced,
    ])
  })
})
