import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { ChildImageSharp, TwContent } from "./vddd"

interface GithubLogoData {
  githubLogo: ChildImageSharp
}

export const githubImage = graphql`
  {
    githubLogo: file(relativePath: { eq: "logo/github.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const GithubLogo = ({ twContent = "mr-2 h-8" }: TwContent) => {
  const { githubLogo } = useStaticQuery<GithubLogoData>(githubImage)
  return (
    <GatsbyImage
      image={githubLogo.childImageSharp.gatsbyImageData}
      tw={twContent}
      alt="GitHub"
    />
  )
}
