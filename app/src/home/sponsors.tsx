import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { FC } from "react"
import "twin.macro"
import "styled-components/macro"

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
      <GatsbyImage
        image={image}
        alt={name}
        tw="my-2 w-64 h-32"
        imgStyle={{ objectFit: "contain" }}
      />
    </FloatingActionCard>
  )
}

const Sponsors: FC = () => {
  const data = useStaticQuery(graphql`
    {
      heimeshoff: file(relativePath: { eq: "logo/heimeshoffit.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ubiquitous: file(relativePath: { eq: "logo/Ubiquitous.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      xebia: file(relativePath: { eq: "logo/xebia.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      kddd: file(relativePath: { eq: "logo/KDDD-conf.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dddeu: file(relativePath: { eq: "logo/dddeu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      eddd: file(relativePath: { eq: "logo/EDDD_Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      ncrafts: file(relativePath: { eq: "logo/logo_newcrafts_noir.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
            image={data.heimeshoff.childImageSharp.gatsbyImageData}
            website="https://www.heimeshoff.de/"
          />
          <Sponsor
            name="Ubiquitous AS"
            image={data.ubiquitous.childImageSharp.gatsbyImageData}
            website="https://www.ubiquitous.no/"
          />
          <Sponsor
            name="Xebia"
            image={data.xebia.childImageSharp.gatsbyImageData}
            website="https://www.xebia.com/"
          />
          <Sponsor
            name="KanDDDinsky"
            image={data.kddd.childImageSharp.gatsbyImageData}
            website="https://kandddinsky.de/"
          />
          <Sponsor
            name="DDD Europe"
            image={data.dddeu.childImageSharp.gatsbyImageData}
            website="https://dddeurope.com/"
          />
          <Sponsor
            name="Explore DDD"
            image={data.eddd.childImageSharp.gatsbyImageData}
            website="https://exploreddd.com/"
          />
          <Sponsor
            name="nCrafts"
            image={data.ncrafts.childImageSharp.gatsbyImageData}
            website="https://ncrafts.io/"
          />
        </div>
      </div>
    </div>
  )
}

export default Sponsors
