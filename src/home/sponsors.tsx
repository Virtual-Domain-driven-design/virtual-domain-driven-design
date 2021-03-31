import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"
import "twin.macro"

import FloatingActionCard from "../components/floating-action-card"

interface SponsorContent {
  name: string
  image: any
  website: string
}

const Sponsor = ({ name, image, website }: SponsorContent) => {
  return (
    <FloatingActionCard key={name} id={name} href={website}>
      <div tw="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
        {name}
      </div>
      <Img
        tw="my-2 w-64 h-32"
        fluid={image}
        imgStyle={{ objectFit: "contain" }}
      />
    </FloatingActionCard>
  )
}

const Sponsors: FC = () => {
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
    <div
      tw="bg-white flex flex-col items-center justify-center m-4"
      id="sponsors"
    >
      <div tw="mt-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-center text-3xl">
          Sponsors
        </h2>
        <div tw="w-full flex-wrap flex flex-col sm:flex-row justify-center items-stretch">
          <Sponsor
            name="Heimeshoff IT"
            image={data.heimeshoff.childImageSharp.fluid}
            website="https://www.heimeshoff.de/"
          />
          <Sponsor
            name="Ubiquitous AS"
            image={data.ubiquitous.childImageSharp.fluid}
            website="https://www.ubiquitous.no/"
          />
          <Sponsor
            name="Xebia"
            image={data.xebia.childImageSharp.fluid}
            website="https://www.xebia.com/"
          />
          <Sponsor
            name="KanDDDinsky"
            image={data.kddd.childImageSharp.fluid}
            website="https://kandddinsky.de/"
          />
          <Sponsor
            name="DDD Europe"
            image={data.dddeu.childImageSharp.fluid}
            website="https://dddeurope.com/"
          />
          <Sponsor
            name="Explore DDD"
            image={data.eddd.childImageSharp.fluid}
            website="https://exploreddd.com/"
          />
          <Sponsor
            name="nCrafts"
            image={data.ncrafts.childImageSharp.fluid}
            website="https://ncrafts.io/"
          />
          <Sponsor
            name="Sessionize"
            image={data.sessionize.childImageSharp.fluid}
            website="https://sessionize.com/"
          />
        </div>
      </div>
    </div>
  )
}

export default Sponsors
