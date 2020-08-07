import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Podcast = ({ session }) => {
  if (session.podcast) {
    return (
      <div className="group bg-white w-64 rounded-lg shadow-md p-2 m-1">
        <div className="embed-responsive aspect-ratio-16/9">
          <iframe
            title={session.title}
            className="embed-responsive-item"
            allowFullScreen={true}
            src={session.podcast}
            scrolling="no"
            frameBorder={0}
          ></iframe>
        </div>
        <div className="text-sm text-left font-bold link">{session.title}</div>
      </div>
    )
  }
  return <div></div>
}

const PodcastPlatform = ({ platform }) => {
  return (
    <a
      key={platform.name}
      className="floating-action-button rounded-full"
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img fluid={platform.img.childImageSharp.fluid} className="h-10 w-10" />
    </a>
  )
}

const Podcasts = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      sessions: allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          sessions {
            title
            podcast
          }
        }
      }
      podcasts: allContentYaml(
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
  `)
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <h2 className="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Podcasts</h2>
      <div>
        <p className="italic text-justify">
          childImageSharp Listen to the VDDD podcast by clicking on one of the
          platforms below
        </p>
        <div className="my-1 w-full flex items-center justify-around">
          {data.podcasts.nodes[0].podcastsPlatforms.map((platform, index) => {
            return <PodcastPlatform platform={platform}></PodcastPlatform>
          })}
        </div>
      </div>
      <div className="w-11/12 md:w-5/6">
        <div className="flex items-stretch justify-center flex-wrap">
          {data.sessions.nodes[0].sessions.map((session, index) => {
            return <Podcast session={session}></Podcast>
          })}
        </div>
      </div>
    </div>
  )
}

export default Podcasts
