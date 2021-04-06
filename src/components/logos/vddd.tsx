import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export type ChildImageSharp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface VdddLogoData {
  vdddLogo: ChildImageSharp
}

export const vdddImage = graphql`
  {
    vdddLogo: file(relativePath: { eq: "logo/vddd_logo_tp.png" }) {
      childImageSharp {
        gatsbyImageData(height: 32, width: 135, layout: FIXED)
      }
    }
  }
`

export const VdddLogo = ({ twContent }: { twContent?: string }) => {
  const { vdddLogo } = useStaticQuery<VdddLogoData>(vdddImage)
  return (
    <GatsbyImage
      image={vdddLogo.childImageSharp.gatsbyImageData}
      tw={twContent || "object-contain mr-2 h-8"}
      alt="Virtual DDD"
    />
  )
}
