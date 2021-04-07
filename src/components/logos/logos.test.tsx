jest.mock("gatsby")
import { useStaticQuery } from "gatsby"
import * as React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import logosAsQuery from "../../../__mocks__/samples/logos.json"
import { VdddLogo, SlackLogo, TwitterLogo } from "./index"

describe("The logos", () => {
  beforeEach(() => {
    // @ts-ignore
    useStaticQuery.mockReturnValue(logosAsQuery)
  })
    it("should render the Vddd logo", () => {
      const container = renderer
        .create(<VdddLogo />)
        .toJSON()

      expect(container).toMatchSnapshot()
    })

    it("should have defaults for Vddd but allow to override the tailwind values", () => {
      const initial = VdddLogo({ twContent: undefined })
      expect(initial.props.tw).toBeDefined()
      const result = VdddLogo({ twContent: "mr4" })
      expect(result.props.tw).toEqual("mr4")
    })

    it("should render the Slack logo", () => {
      const container = renderer
        .create(<SlackLogo />)
        .toJSON()

      expect(container).toMatchSnapshot()
    })

    it("should have defaults for Slack but allow to override the tailwind values", () => {
      const initial = SlackLogo({ twContent: undefined })
      expect(initial.props.tw).toBeDefined()
      const result = SlackLogo({ twContent: "mr4" })
      expect(result.props.tw).toEqual("mr4")
    })

    it("should render the Twitter logo", () => {
      const container = renderer
        .create(<TwitterLogo />)
        .toJSON()

      expect(container).toMatchSnapshot()
    })

    it("should have defaults for Twitter but allow to override the tailwind values", () => {
      const initial = TwitterLogo({ twContent: undefined })
      expect(initial.props.tw).toBeDefined()
      const result = TwitterLogo({ twContent: "mr4" })
      expect(result.props.tw).toEqual("mr4")
    })

})
