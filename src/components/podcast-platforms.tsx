import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"

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
    <div className="my-1 w-full flex items-center justify-around">
      {allPodcastsPlatforms.map((platform, index) => {
        return (
          <a
            key={index}
            className="floating-action-button rounded-full"
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={platform.img.childImageSharp.fluid}
              className="h-10 w-10"
            />
          </a>
        )
      })}
    </div>
  )
}

export default PodcastPlatforms
