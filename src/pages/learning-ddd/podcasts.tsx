import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"
import tw from "twin.macro"

import Layout from "../../templates/layout"
import Podcast, { PodcastContent } from "../../learning-ddd/podcast"
import PodcastPlatforms from "../../learning-ddd/podcast-platforms"
import SEO from "../../components/seo"

const initialLengthSize = 15

const Podcasts: FC = () => {
  const [podcastsLength, setPodcastsLength] = useState(initialLengthSize)

  const allPodcasts = useStaticQuery<{
    allContentYaml: { nodes: { sessions: PodcastContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          sessions {
            title
            podcast
          }
        }
      }
    }
  `).allContentYaml.nodes[0].sessions.filter(
    (session) => session.podcast != null
  )

  const areAllPodcastsVisible = podcastsLength > allPodcasts.length

  const podcasts = allPodcasts.slice(0, podcastsLength)

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design podcasts"
        description="A curated list of Domain-Driven Design and Software Architecture related podcasts"
      />
      <div tw="w-full flex flex-col items-center justify-start">
        <h2 tw="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Podcasts</h2>
        <PodcastPlatforms />
        <div tw="w-11/12 md:w-5/6">
          <div tw="flex items-stretch justify-center flex-wrap">
            {podcasts.map((session) => {
              return <Podcast key={session.title} session={session} />
            })}
          </div>
        </div>
        <button
          onClick={() => setPodcastsLength(podcastsLength + initialLengthSize)}
          tw="my-4 bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded"
          css={areAllPodcastsVisible && tw`invisible`}
        >
          Load more
        </button>
      </div>
    </Layout>
  )
}

export default Podcasts
