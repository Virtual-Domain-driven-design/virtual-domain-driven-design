import React, { ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Sponsor = ({ name, image, website }) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group floating-action-button bg-white w-full sm:w-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start"
    >
      <div className="flex flex-col items-center justify-start">
        <div className="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {name}
        </div>
        <Img
          className="my-2 w-64 h-32"
          fluid={image}
          imgStyle={{ objectFit: "contain" }}
        ></Img>
      </div>
    </a>
  )
}

const Sponsors = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      heimeshoff: file(relativePath: { eq: "logo/heimeshoffit.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ubiquitous: file(relativePath: { eq: "logo/Ubiquitous.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      xebia: file(relativePath: { eq: "logo/xebia.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kddd: file(relativePath: { eq: "logo/KDDD-conf.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dddeu: file(relativePath: { eq: "logo/dddeu.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eddd: file(relativePath: { eq: "logo/EDDD_Logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ncrafts: file(relativePath: { eq: "logo/logo_newcrafts_noir.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sessionize: file(relativePath: { eq: "logo/sessionize.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="section bg-gray-200" id="sponsors">
      <div className="mt-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2>Sponsors</h2>
        <div className="w-full flex-wrap flex flex-col sm:flex-row justify-center items-stretch">
          <Sponsor
            name="Heimeshoff IT"
            image={data.heimeshoff.childImageSharp.fluid}
            website="https://www.heimeshoff.de/"
          ></Sponsor>
          <Sponsor
            name="Ubiquitous AS"
            image={data.ubiquitous.childImageSharp.fluid}
            website="https://www.ubiquitous.no/"
          ></Sponsor>
          <Sponsor
            name="Xebia"
            image={data.xebia.childImageSharp.fluid}
            website="https://www.xebia.com/"
          ></Sponsor>
          <Sponsor
            name="KanDDDinsky"
            image={data.kddd.childImageSharp.fluid}
            website="https://kandddinsky.de/"
          ></Sponsor>
          <Sponsor
            name="DDD Europe"
            image={data.dddeu.childImageSharp.fluid}
            website="https://dddeurope.com/"
          ></Sponsor>
          <Sponsor
            name="Explore DDD"
            image={data.eddd.childImageSharp.fluid}
            website="https://exploreddd.com/"
          ></Sponsor>
          <Sponsor
            name="nCrafts"
            image={data.ncrafts.childImageSharp.fluid}
            website="https://ncrafts.io/"
          ></Sponsor>
          <Sponsor
            name="Sessionize"
            image={data.sessionize.childImageSharp.fluid}
            website="https://sessionize.com/"
          ></Sponsor>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
