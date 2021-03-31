import GithubLink from "./github-link"
import samples from "../../__mocks__/samples"

describe("The github link plugin", () => {
  it("should not change /static addresses", () => {
    const result = GithubLink(samples.exampleStatic)

    expect(result?.props.href).toEqual(samples.exampleStatic.href)
    expect(result?.props.to).toBeUndefined()
  })

  it("should treat anchors like a basic 'a'", () => {
    const result = GithubLink(samples.exampleAnchor)

    expect(result?.props.href).toEqual(samples.exampleAnchor.href)
    expect(result?.props.to).toBeUndefined()
    expect(result?.props["data-link-external"]).toBeUndefined()
    expect(result?.props["data-link-internal"]).toBeUndefined()
  })

  it("should not change external references", () => {
    const result = GithubLink(samples.exampleExternalLink)

    expect(result?.props.href).toEqual(samples.exampleExternalLink.href)
    expect(result?.props.to).toBeUndefined()
    expect(result?.props["data-link-external"]).toBeTruthy()
  })

  it("should build the correct reference for an internal link", () => {
    const result = GithubLink(samples.exampleInternalLink)

    expect(result?.props.to).toEqual(
      samples.exampleInternalLink.location.pathname +
        samples.exampleInternalLink.href
    )
    expect(result?.props.href).toBeUndefined()
    expect(result?.props["data-link-internal"]).toBeTruthy()
  })

  it("should build the correct reference for github users", () => {
    const result = GithubLink(samples.exampleGithubUser)

    expect(result?.props.href).toEqual("https://github.com/emgsilva")
    expect(result?.props.to).toBeUndefined()
    expect(result?.props["data-link-external"]).toBeTruthy()
  })
})
