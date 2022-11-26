import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ChildImageSharp, TwContent } from "./vddd"

interface MastodonLogoData {
  mastodonLogo: ChildImageSharp
}

export const mastodonImage = graphql`
  {
    mastodonLogo: file(relativePath: { eq: "logo/mastodon.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const MastodonLogo = ({ twContent = "mr-2 h-8" }: TwContent) => {
  const { mastodonLogo } = useStaticQuery<MastodonLogoData>(mastodonImage)
  return (
    <GatsbyImage
      image={mastodonLogo.childImageSharp.gatsbyImageData}
      tw={twContent}
      alt="Mastodon Logo"
    />
  )
}
