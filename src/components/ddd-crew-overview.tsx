import React, { ReactElement } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Repo = ({ repo }) => {
  return (
    <Link
      className="group floating-action-button bg-white w-full sm:w-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start"
      to={repo.to}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {repo.name}
        </div>
        <Img
          fluid={repo.img.childImageSharp.fluid}
          className="my-2 w-64 h-32"
          imgStyle={{ objectFit: "contain" }}
        />
        <div className="text-gray-800 text-sm text-center">{repo.excerpt}</div>
      </div>
    </Link>
  )
}

const DDDCrewOverview = (): ReactElement => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <h2 className="my-6 w-4/5 lg:w-2/3 xl:w-1/2">DDD-crew</h2>
      <div>
        <a
          className="my-8 bg-blue-500 floating-action-button text-white rounded-lg border-2"
          href="https://github.com/ddd-crew"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get involved with the ddd-crew on Github
        </a>
      </div>
      <div className="w-11/12 md:w-5/6">
        <div className="flex justify-center flex-wrap">
          {data.allContentYaml.nodes[0].dddCrew.map((repo, index) => {
            return <Repo key={index} repo={repo}></Repo>
          })}
        </div>
      </div>
    </div>
  )
}

export default DDDCrewOverview
