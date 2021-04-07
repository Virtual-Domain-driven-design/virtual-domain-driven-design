import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { ChildImageSharp } from "./vddd"

interface TwitterLogoData {
  twitterLogo: ChildImageSharp
}

export const twitterImage = graphql`
  {
    twitterLogo: file(relativePath: { eq: "logo/twitter.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const TwitterLogo = ({ twContent }: { twContent?: string }) => {
  const { twitterLogo } = useStaticQuery<TwitterLogoData>(twitterImage)
  return (
    <GatsbyImage
      image={twitterLogo.childImageSharp.gatsbyImageData}
      tw={twContent || "mr-2 h-8"}
      alt="Slack"
    />
  )
}
