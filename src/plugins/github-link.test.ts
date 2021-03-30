import GithubLink from "./github-link"
import samples from "../../__mocks__/samples"

describe("The markdown link plugin", () => {
  it("should not change /static addresses", () => {
    const result = GithubLink(samples.exampleStatic)
    expect(result?.props.href).toEqual(samples.exampleStatic.href)
    expect(result?.props.to).toBeUndefined()
  })

  it("should not change anchors", () => {
    const result = GithubLink(samples.exampleAnchor)

    expect(result?.props.href).toEqual(samples.exampleAnchor.href)
    expect(result?.props.to).toBeUndefined()
  })

  it("should not change external references", () => {
    const result = GithubLink(samples.exampleExternalLink)

    expect(result?.props.href).toEqual(samples.exampleExternalLink.href)
    expect(result?.props.to).toBeUndefined()
  })
  it("should build the correct reference for an internal link", () => {
    const result = GithubLink(samples.exampleInternalLink)
    expect(result?.props.to).toEqual(
      samples.exampleInternalLink.location.pathname +
        samples.exampleInternalLink.href
    )
  })
})
