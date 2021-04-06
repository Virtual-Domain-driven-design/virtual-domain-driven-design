import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export type ChildImageSharp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

export interface VdddLogoData {
  vdddLogoTp: ChildImageSharp
}

export interface SlackLogoData {
  slackLogo: ChildImageSharp
}

export const slackLogoData = graphql`
  {
    slackLogo: file(relativePath: { eq: "logo/slack_icon.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const SlackLogo = ({ tw }: { tw?: string }) => {
  const { slackLogo } = useStaticQuery<SlackLogoData>(slackLogoData)
  return (
    <GatsbyImage
      image={slackLogo.childImageSharp.gatsbyImageData}
      tw={tw || "mr-2 h-8"}
      alt="Slack"
    />
  )
}
