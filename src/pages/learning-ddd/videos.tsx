import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"
import tw from "twin.macro"

import Layout from "../../templates/layout"
import SEO from "../../components/seo"
import Video, { VideoContent } from "../../learning-ddd/video"

const Videos: FC = () => {
  const [videosLength, setVideosLength] = useState(15)

  const allVideos = useStaticQuery<{
    allContentYaml: { nodes: { videos: VideoContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { videos: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          videos {
            level
            tags
            title
            video
          }
        }
      }
    }
  `)
    .allContentYaml.nodes.map((node) => node.videos)
    .flat()

  const areAllVideosVisible = videosLength > allVideos.length

  const videos = allVideos.slice(0, videosLength)

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design videos"
        description="A curated list of Domain-Driven Design and Software Architecture related videos"
      />
      <div tw="w-full flex flex-col items-center justify-start">
        <h2 tw="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Videos</h2>
        <div tw="w-11/12 md:w-5/6">
          <div tw="flex items-stretch justify-center flex-wrap">
            {videos.map((video, index) => {
              return <Video key={index} video={video}></Video>
            })}
          </div>
        </div>
        <button
          onClick={() => setVideosLength(videosLength + 21)}
          tw="my-4 bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded"
          css={areAllVideosVisible && tw`invisible`}
        >
          Load more
        </button>
      </div>
    </Layout>
  )
}

export default Videos
