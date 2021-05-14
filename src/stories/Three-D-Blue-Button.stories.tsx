import * as React from "react"
import { Story } from "@storybook/react/types-6-0"

import ThreeDBlueButton from "../components/three-d-blue-button"

export default {
  title: "Three D Blue Button",
  component: ThreeDBlueButton
}

export const Template: Story = (props) => <ThreeDBlueButton to="test">Hi</ThreeDBlueButton>
