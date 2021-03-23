import MarkdownLink from "./markdown-link"
import samples from "../../__mocks__/samples"

describe("The markdown link plugin", () => {
  it("should not change /static addresses", () => {
    const result = MarkdownLink(samples.exampleStatic)
    expect(result?.props.href).toEqual(samples.exampleStatic.href)
    expect(result?.props.to).toBeUndefined()
  })

  it("should not change anchors", () => {
    const result = MarkdownLink(samples.exampleAnchor)

    expect(result?.props.href).toEqual(samples.exampleAnchor.href)
    expect(result?.props.to).toBeUndefined()
  })

  it("should not external references", () => {
    const result = MarkdownLink(samples.exampleExternalLink)

    expect(result?.props.href).toEqual(samples.exampleExternalLink.href)
    expect(result?.props.to).toBeUndefined()
  })
  it("should change the reference of an internal link for same domain", () => {
    const result = MarkdownLink(samples.exampleSameDomain)

    expect(result?.props.href).toBeUndefined()
    expect(result?.props.to).toEqual(samples.exampleSameDomain.href)
  })
})
