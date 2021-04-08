import * as React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import NavBar from "./index"

describe("The NavBar", () => {
  it("should render the whole navigation bar", () => {
    const container = renderer.create(<NavBar />).toJSON()

    expect(container).toMatchSnapshot()
  })
})
