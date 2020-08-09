import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"

const Community = ({ index, community }) => {
  return (
    <a
      key={index}
      className="group floating-action-button bg-white w-full sm:w-48 rounded-lg shadow-md m-2 flex flex-col items-center justify-start"
      href={community.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center justify-start">
        <div className="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {community.name}
        </div>
        <img
          className="my-2 w-64 h-32 object-contain"
          alt=""
          src={community.img}
        ></img>
      </div>
      <div className="text-gray-700 text-xs italic text-center">
        {community.country}
      </div>
    </a>
  )
}

const Communities = (): ReactElement => {
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
    <div className="section bg-gray-200" id="communities">
      <div className="w-full flex flex-col items-center justify-start">
        <h2 className="mt-6 w-4/5 lg:w-2/3 xl:w-1/2">Communities</h2>
        <h3 className="my-2 w-full text-center flex flex-col items-center justify-center">
          Check out the communities near you.
          <div>"Are missing your own community?</div>
          <a
            href="https://github.com/Baasie/virtual-domain-driven-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send us a pull request!
          </a>
        </h3>
        <div className="w-16/12 md:w-5/6">
          <div className="flex justify-center flex-wrap">
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
