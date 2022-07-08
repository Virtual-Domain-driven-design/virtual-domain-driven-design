import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import * as React from "react"
import "twin.macro"
import "styled-components/macro"

interface PodcastPlatform {
  img: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  name: string
  url: string
}

const PodcastPlatforms = () => {
  const allPodcastsPlatforms = useStaticQuery<{
    allContentYaml: { nodes: { podcastsPlatforms: PodcastPlatform[] }[] }
  }>(graphql`
    {
      allContentYaml(
        filter: { podcastsPlatforms: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          podcastsPlatforms {
            name
            url
            img {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `).allContentYaml.nodes[0].podcastsPlatforms
  return (
    <div tw="my-1 w-full flex items-center justify-around w-1/3">
      {allPodcastsPlatforms.map((platform) => {
        return (
          <a
            key={platform.name}
            tw="shadow-md transform scale-100 duration-100 hover:scale-110 rounded-full"
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={platform.img.childImageSharp.gatsbyImageData}
              alt={platform.name}
              tw="h-10 w-10"
            />
          </a>
        )
      })}
    </div>
  )
}

export default PodcastPlatforms
