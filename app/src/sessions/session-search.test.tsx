import { render, fireEvent } from "@testing-library/react"
import * as React from "react"
import "jest-styled-components"
// This below import is what gives us the "toBeInTheDocument" method
import "@testing-library/jest-dom/extend-expect"
import SessionSearch from "./session-search"

const sessions = require("../../__mocks__/samples/sessions")

describe("The session search component", () => {
  it("should contain the search input field and search results", () => {
    const { getByLabelText, getByTestId } = render(
      <SessionSearch sessions={sessions} />
    )

    const input = getByLabelText("Search") as HTMLInputElement
    const searchResult = getByTestId("Sessions")
    expect(input.value).toEqual("")
    expect(searchResult.childElementCount).toEqual(2)
  })

  it("should trigger a search and render the result on change", () => {
    const { getByLabelText, getByTestId } = render(
      <SessionSearch sessions={sessions} />
    )

    const input = getByLabelText("Search")
    const searchResult = getByTestId("Sessions")
    fireEvent.change(input, { target: { value: "ward" } })
    expect(searchResult.childElementCount).toEqual(1)
  })

  it("should trigger a search when clicking on a tag", () => {
    const { getByLabelText, getByTestId } = render(
      <SessionSearch sessions={sessions} />
    )

    const input = getByLabelText("Search") as HTMLInputElement
    const searchResult = getByTestId("Sessions")
    const firstSession = getByTestId(sessions[0].tags[0])
    fireEvent.click(firstSession)
    expect(searchResult.childElementCount).toEqual(1)
    expect(input.value).toEqual(sessions[0].tags[0])
  })

  it("should work without search results too", () => {
    const { getByLabelText, getByTestId } = render(
      <SessionSearch sessions={sessions} />
    )

    const input = getByLabelText("Search") as HTMLInputElement
    const searchResult = getByTestId("Sessions")

    fireEvent.change(input, { target: { value: "xyz" } })
    expect(searchResult.childElementCount).toEqual(0)
  })

  it("should offer paging if more items can be shown", () => {
    const { getByLabelText, getByTestId } = render(
      <SessionSearch sessions={sessions} showItems={1} />
    )

    const input = getByLabelText("Search") as HTMLInputElement
    const pagingButton = getByTestId("More")

    expect(input.value).toEqual("")
    expect(pagingButton).toBeDefined()
  })

  it("should not offer paging if all items are shown", () => {
    const { getByTestId } = render(
      <SessionSearch sessions={sessions} showItems={2} />
    )

    const noPagingButton = getByTestId("All")
    expect(noPagingButton).toBeDefined()
  })
})
