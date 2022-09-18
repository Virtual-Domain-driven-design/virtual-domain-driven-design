import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ChildImageSharp, TwContent } from "./vddd"

interface DiscordLogoData {
  discordLogo: ChildImageSharp
}

export const discordImage = graphql`
  {
    discordLogo: file(relativePath: { eq: "logo/discord.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const DiscordLogo = ({ twContent = "mr-2 h-8" }: TwContent) => {
  const { discordLogo } = useStaticQuery<DiscordLogoData>(discordImage)
  return (
    <GatsbyImage
      image={discordLogo.childImageSharp.gatsbyImageData}
      tw={twContent}
      alt="Discord Logo"
    />
  )
}
