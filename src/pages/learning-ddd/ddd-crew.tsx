import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../templates/layout"

import DDDCrew from "../../components/ddd-crew"

function DDDCrews(): ReactElement {
  const dddCrew = useStaticQuery(graphql`
    query {
      allContentYaml(
        filter: { dddCrew: { elemMatch: { name: { ne: null } } } }
      ) {
        nodes {
          dddCrew {
            excerpt
            name
            to
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
  `).allContentYaml.nodes[0].dddCrew

  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <h2 className="my-6 lg:w-2/3 xl:w-1/2">DDD Crew</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row flex-wrap items-center w18/20">
            {dddCrew.map((repo, index) => {
              return <DDDCrew key={index} repo={repo}></DDDCrew>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DDDCrews
