import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { FC } from "react"
import "twin.macro"
import "styled-components/macro"

import FloatingActionCard from "../components/floating-action-card"

interface ConferenceContent {
  name: string
  image: any
  location: string
  date: string
  website: string
}

const Conference = ({
                      name,
                      image,
                      location,
                      date,
                      website,
                    }: ConferenceContent) => {
  return (
    <FloatingActionCard key={name} id={name} href={website}>
      <div tw="m-2 font-semibold text-gray-800 text-sm text-center">{name}</div>
      <div tw="text-gray-800 text-sm text-center">{date}</div>
      <GatsbyImage
        image={image}
        tw="my-2 w-64 h-32"
        imgStyle={{ objectFit: "contain" }}
        alt={name}
      />
      <div tw="mb-2 text-gray-800 text-sm text-center">{location}</div>
    </FloatingActionCard>
  )
}

const Conferences: FC = () => {
  const data = useStaticQuery(graphql`
    {
      esrc_live: file(relativePath: { eq: "logo/ESRC_Live.png" }) {
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
      kddd: file(relativePath: { eq: "logo/KDDD-conf.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dddchina: file(relativePath: { eq: "logo/ddd-china.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dddtaiwan: file(relativePath: { eq: "logo/ddd-taiwan.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dddexchange: file(relativePath: { eq: "logo/ddd-exchange.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      muconexchange: file(relativePath: { eq: "logo/mucon-exchange.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      sag: file(relativePath: { eq: "logo/SAG-2021.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  return (
    <div
      tw="bg-white flex flex-col items-center justify-center m-4"
      id="conferences"
    >
      <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-center text-3xl">
        Conferences
      </h2>
      <div tw="md:w-5/6">
        <div tw="flex justify-center flex-wrap">
          <Conference
            name="Domain-Driven Design Europe"
            image={data.dddeu.childImageSharp.gatsbyImageData}
            location="Amsterdam, Netherlands"
            date="May 27-30 2024"
            website="https://dddeurope.com/"
          />
        <Conference
            name="DDD Foundations"
            image={data.dddeu.childImageSharp.gatsbyImageData}
            location="Amsterdam, Netherlands"
            date="May 29 2024"
            website="https://dddeurope.com/"
          />
          <Conference
            name="KanDDDinsky"
            image={data.kddd.childImageSharp.gatsbyImageData}
            location="Berlin, Germany"
            date="31 Oct.-1 Nov. 2022"
            website="https://kandddinsky.de/"
          />
        </div>
      </div>
    </div>
  )
}

export default Conferences
