import * as React from "react"
import { render } from "@testing-library/react"
import ParsedContent from "./link-parser"

describe("The link parser", () => {
  it("should replace twitter URIs with links", () => {
    const description =
      "it became a joke:\n" +
      "— How do I do— It's traverse\n" +
      "https://twitter.com/search?q=%22it%27s%20traverse%22&src=typed_query\n" +
      "Since it's a bit abstract until you actually encounter it"

    const { container } = render(<ParsedContent text={description} />)

    const result = container.querySelector("span")?.querySelector("a")
    expect(result?.href).toEqual(
      "https://twitter.com/search?q=%22it%27s%20traverse%22&src=typed_query"
    )
    expect(result?.text).toEqual("(https://twitter.com...)")
  })
})
