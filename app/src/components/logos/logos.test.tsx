import * as React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import {
  VdddLogo,
  DiscordLogo,
  MastodonLogo,
  TwitterLogo,
  GithubLogo,
  NetlifyLogo,
} from "./index"

describe("The logos", () => {
  it("should render the Vddd logo", () => {
    const container = renderer.create(<VdddLogo/>).toJSON()

    expect(container).toMatchSnapshot()
  })

  it("should have defaults for Vddd but allow to override the tailwind values", () => {
    const initial = VdddLogo({ twContent: undefined })
    expect(initial.props.tw).toContain("mr-2 h-8")
    const result = VdddLogo({ twContent: "mr4" })
    expect(result.props.tw).toEqual("mr4")
  })

  it("should render the Discord logo", () => {
    const container = renderer.create(<DiscordLogo/>).toJSON()

    expect(container).toMatchSnapshot()
  })

  it("should have defaults for Discord but allow to override the tailwind values", () => {
    const initial = DiscordLogo({ twContent: undefined })
    expect(initial.props.tw).toContain("mr-2 h-8")
    const result = DiscordLogo({ twContent: "mr4" })
    expect(result.props.tw).toEqual("mr4")
  })

  it("should render the Mastodon logo", () => {
    const container = renderer.create(<MastodonLogo/>).toJSON()

    expect(container).toMatchSnapshot()
  })

  it("should have defaults for Mastodon but allow to override the tailwind values", () => {
    const initial = MastodonLogo({ twContent: undefined })
    expect(initial.props.tw).toContain("mr-2 h-8")
    const result = MastodonLogo({ twContent: "mr4" })
    expect(result.props.tw).toEqual("mr4")
  })

  it("should render the Twitter logo", () => {
    const container = renderer.create(<TwitterLogo/>).toJSON()

    expect(container).toMatchSnapshot()
  })

  it("should have defaults for Twitter but allow to override the tailwind values", () => {
    const initial = TwitterLogo({ twContent: undefined })
    expect(initial.props.tw).toContain("mr-2 h-8")
    const result = TwitterLogo({ twContent: "mr4" })
    expect(result.props.tw).toEqual("mr4")
  })

  it("should render the GitHub logo", () => {
    const container = renderer.create(<GithubLogo/>).toJSON()

    expect(container).toMatchSnapshot()
  })

  it("should have defaults for Github but allow to override the tailwind values", () => {
    const initial = GithubLogo({ twContent: undefined })
    expect(initial.props.tw).toContain("mr-2 h-8")
    const result = GithubLogo({ twContent: "mr4" })
    expect(result.props.tw).toEqual("mr4")
  })

  it("should render the Netlify logo", () => {
    const container = renderer.create(<NetlifyLogo/>).toJSON()

    expect(container).toMatchSnapshot()
  })

  it("should have defaults for Netlify but allow to override the tailwind values", () => {
    const initial = NetlifyLogo({ twContent: undefined })
    expect(initial.props.tw).toContain("mr-2 h-8")
    const result = NetlifyLogo({ twContent: "mr4" })
    expect(result.props.tw).toEqual("mr4")
  })
})
