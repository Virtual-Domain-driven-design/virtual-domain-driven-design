import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import "twin.macro"

import FloatingActionCard from "./core/floating-action-card"

const Community: FC = ({ index, community }) => {
  return (
    <FloatingActionCard key={index} href={community.url}>
      <div tw="flex flex-col items-center justify-start">
        <div tw="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {community.name}
        </div>
        <img
          tw="my-2 w-64 h-32 object-contain"
          alt=""
          src={community.img}
        ></img>
      </div>
      <div tw="text-gray-700 text-xs italic text-center">
        {community.country}
      </div>
    </FloatingActionCard>
  )
}

const Communities: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentYaml(
        filter: { communities: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          communities {
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
        <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
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
            {communities.map((community, index) => {
              return <Community key={index} community={community}></Community>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Communities
