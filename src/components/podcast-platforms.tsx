import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"
import "twin.macro"

interface PodcastPlatform {
  img: any
  name: string
  url: string
}

const PodcastPlatforms: FC = () => {
  const allPodcastsPlatforms = useStaticQuery<{
    allContentYaml: { nodes: { podcastsPlatforms: PodcastPlatform[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { podcastsPlatforms: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          podcastsPlatforms {
            name
            url
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allContentYaml.nodes[0].podcastsPlatforms
  return (
    <div tw="my-1 w-full flex items-center justify-around">
      {allPodcastsPlatforms.map((platform, index) => {
        return (
          <a
            key={index}
            tw="shadow-md transform scale-100 duration-100 hover:scale-110 rounded-full"
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={platform.img.childImageSharp.fluid} tw="h-10 w-10" />
          </a>
        )
      })}
    </div>
  )
}

export default PodcastPlatforms
