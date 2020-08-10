import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../templates/layout"

import Podcast from "../../components/podcast"
import PodcastPlatforms from "../../components/podcast-platforms"
import SEO from "../../components/seo"

function Podcasts(): ReactElement {
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
  const podcastsPlatforms = data.podcasts.nodes[0].podcastsPlatforms
  const podcasts = data.sessions.nodes[0].sessions.filter(
    (session) => session.podcast != null
  )

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design podcasts"
        description="A curated list of DDD related podcasts"
        image
        article
      />
      <div className="w-full flex flex-col items-center">
        <h2 className="my-6 lg:w-2/3 xl:w-1/2">Podcasts</h2>
        <div>
          <p className="italic text-justify">
            Listen to the VDDD podcast by clicking on one of the platforms below
          </p>
          <div className="my-1 w-full flex items-center justify-around">
            {podcastsPlatforms.map((platform, index) => {
              return (
                <PodcastPlatforms
                  key={index}
                  platform={platform}
                ></PodcastPlatforms>
              )
            })}
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row flex-wrap items-center w18/20">
            {podcasts.map((session, index) => {
              return <Podcast key={index} session={session}></Podcast>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Podcasts
