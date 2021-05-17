import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { ChildImageSharp, TwContent } from "./vddd"

interface NetlifyLogoData {
  netlifyLogo: ChildImageSharp
}

export const netlifyImage = graphql`
  {
    netlifyLogo: file(relativePath: { eq: "logo/netlify.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const NetlifyLogo = ({ twContent = "mr-2 h-8" }: TwContent) => {
  const { netlifyLogo } = useStaticQuery<NetlifyLogoData>(netlifyImage)
  return (
    <GatsbyImage
      image={netlifyLogo.childImageSharp.gatsbyImageData}
      tw={twContent}
      alt="Netlify"
    />
  )
}
