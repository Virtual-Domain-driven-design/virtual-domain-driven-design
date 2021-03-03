import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "twin.macro"

type HeuristicsHeroProps = {
  excerpt: string
  title: string
}

const HeuristicHero = (heuristicHeroProps: HeuristicsHeroProps) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "kandddinsky.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.backgroundImage.childImageSharp.fluid
  return (
    <BackgroundImage
      tw="flex flex-col items-center justify-center bg-scroll h-auto  relative"
      fluid={imageData}
    >
      <div tw="z-0 absolute inset-0 bg-gray-900 opacity-75"></div>
      <div tw="flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8">
        <h1 tw="text-5xl text-white text-center m-2">
          {heuristicHeroProps.title}
        </h1>
        <div tw="text-3xl text-white text-center">
          {heuristicHeroProps.excerpt}
        </div>
      </div>
      <div tw="w-full lg:w-1/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8"></div>
    </BackgroundImage>
  )
}

export default HeuristicHero
