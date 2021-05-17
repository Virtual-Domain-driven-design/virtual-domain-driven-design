import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ChildImageSharp, TwContent } from "./vddd"

interface SlackLogoData {
  slackLogo: ChildImageSharp
}

export const slackImage = graphql`
  {
    slackLogo: file(relativePath: { eq: "logo/slack_icon.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const SlackLogo = ({ twContent = "mr-2 h-8" }: TwContent) => {
  const { slackLogo } = useStaticQuery<SlackLogoData>(slackImage)
  return (
    <GatsbyImage
      image={slackLogo.childImageSharp.gatsbyImageData}
      tw={twContent}
      alt="Slack"
    />
  )
}
