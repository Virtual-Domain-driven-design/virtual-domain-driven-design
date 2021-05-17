import * as React from "react"
import { Story } from "@storybook/react/types-6-0"

import ThreeDBlueButton from "../components/three-d-blue-button"

export default {
  title: "Three D Blue Button",
  component: ThreeDBlueButton,
    argTypes: {
      children: {
        description: "The button content",
        defaultValue: "Blue Button",
        type: { name: "text", required: true },
      },
      to: {
        description: "Internal Link",
        type: { name: "text", required: false },
      },
      href: {
        description: "external Link",
        type: { name: "text", required: false },
      },
    }
}

const Template: Story = (props) => <ThreeDBlueButton {...props} />

export const To = Template.bind({})
To.args = { to: "/test" }

export const Href = Template.bind({})
Href.args = { href: "http://test.nu" }
