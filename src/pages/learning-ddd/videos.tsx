import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../templates/layout"

import Video from "../../components/video"

function Videos(): ReactElement {
  const videos = useStaticQuery(graphql`
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

  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <h2 className="my-6 lg:w-2/3 xl:w-1/2">Videos</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row flex-wrap items-center w18/20">
            {videos.map((video, index) => {
              return <Video key={index} video={video}></Video>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Videos
