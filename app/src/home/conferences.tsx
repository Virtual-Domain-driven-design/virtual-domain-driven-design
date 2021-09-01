import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { FC } from "react"
import "twin.macro"

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
            date="23-24 June 2022"
            website="https://dddeurope.com/"
          />
          <Conference
            name="Explore DDD"
            image={data.eddd.childImageSharp.gatsbyImageData}
            location="Keystone, Colorado, USA"
            date="2021 (Workshops)"
            website="https://exploreddd.com/"
          />
          <Conference
            name="KanDDDinsky"
            image={data.kddd.childImageSharp.gatsbyImageData}
            location="Berlin, Germany"
            date="21-22 October 2021"
            website="https://kandddinsky.de/"
          />
          <Conference
            name="DDD China"
            image={data.dddchina.childImageSharp.gatsbyImageData}
            location="Beijing, China"
            date="November"
            website="http://ddd-china.com/"
          />
          <Conference
            name="DDD Taiwan"
            image={data.dddtaiwan.childImageSharp.gatsbyImageData}
            location="Online"
            date="October 16th 2021"
            website="https://conference.ddd-tw.com/2021/"
          />
          <Conference
            name="DDDx: Domain-Driven Design eXchange"
            image={data.dddexchange.childImageSharp.gatsbyImageData}
            location="Online"
            date="8-9 June 2021 "
            website="https://skillsmatter.com/conferences/13257-dddx-2021"
          />
          <Conference
            name="μCon: The Microservices eXchange"
            image={data.muconexchange.childImageSharp.gatsbyImageData}
            location="Online"
            date="13-14 April 2021"
            website="https://skillsmatter.com/conferences/13252-mucon-2021"
          />
          <Conference
            name="Software architecture gathering "
            image={data.sag.childImageSharp.gatsbyImageData}
            location="Online"
            date="11-14 October 2021"
            website="https://conferences.isaqb.org/software-architecture-gathering/"
          />
        </div>
      </div>
    </div>
  )
}

export default Conferences
