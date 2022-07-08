import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import "twin.macro"
import "styled-components/macro"
import FloatingActionCard from "../components/floating-action-card"

type CommunityContent = {
  id: number
  city: string
  country: string
  name: string
  url: string
  img: string
}

interface CommunityProps {
  community: CommunityContent
}

const Community = ({ community }: CommunityProps) => {
  return (
    <FloatingActionCard id={community.id.toString()} href={community.url}>
      <div tw="flex flex-col items-center justify-start">
        <div tw="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {community.name}
        </div>
        <img
          tw="my-2 w-64 h-32 object-contain"
          alt="{community.name}"
          src={community.img}
        />
      </div>
      <div tw="text-gray-700 text-xs italic text-center">
        {community.country}
      </div>
    </FloatingActionCard>
  )
}

const Communities = () => {
  const data = useStaticQuery<{
    allContentYaml: { nodes: { communities: CommunityContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { communities: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          communities {
            id
            city
            country
            name
            url
            img
          }
        }
      }
    }
  `)
  const communities = data.allContentYaml.nodes[0].communities
  return (
    <div
      tw="bg-gray-100 flex flex-col items-center justify-center m-4"
      id="communities"
    >
      <div tw="w-full flex flex-col items-center justify-start">
        <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-center text-3xl">
          Communities
        </h2>
        <h3 tw="my-2 w-full text-center flex flex-col items-center justify-center">
          Check out the communities near you. "Are missing your own community?
          <a
            href="https://github.com/Baasie/virtual-domain-driven-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send us a pull request!
          </a>
        </h3>
        <div tw="md:w-5/6">
          <div tw="flex justify-center flex-wrap">
            {communities.map((community) => {
              return <Community key={community.id} community={community} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Communities
