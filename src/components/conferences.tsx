import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"
import "twin.macro"

import FloatingActionCard from "./core/floating-action-card"

const Conference: FC = ({ name, image, location, date, website }) => {
  return (
    <FloatingActionCard key={name} href={website}>
      <div tw="m-2 font-semibold text-gray-800 text-sm text-center">{name}</div>
      <div tw="text-gray-800 text-sm text-center">{date}</div>
      <Img
        fluid={image}
        tw="my-2 w-64 h-32"
        imgStyle={{ objectFit: "contain" }}
      />
      <div tw="mb-2 text-gray-800 text-sm text-center">{location}</div>
    </FloatingActionCard>
  )
}

const Conferences: FC = () => {
  const data = useStaticQuery(graphql`
    query {
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
      kddd: file(relativePath: { eq: "logo/KDDD-conf.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dddchina: file(relativePath: { eq: "logo/ddd-china.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dddtaiwan: file(relativePath: { eq: "logo/ddd-taiwan.png" }) {
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
      id="conferences"
    >
      <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-center text-3xl">
        Conferences
      </h2>
      <div tw="md:w-5/6">
        <div tw="flex justify-center flex-wrap">
          <Conference
            name="Domain-Driven Design Europe"
            image={data.dddeu.childImageSharp.fluid}
            location="Online-only"
            date="February 4-5, 2021"
            website="https://dddeurope.com/"
          ></Conference>
          <Conference
            name="Explore DDD"
            image={data.eddd.childImageSharp.fluid}
            location="Keystone, Colorado, USA"
            date="November (Virtual)"
            website="https://exploreddd.com/"
          ></Conference>
          <Conference
            name="KanDDDinsky"
            image={data.kddd.childImageSharp.fluid}
            location="Berlin, Germany"
            date="2021"
            website="https://kandddinsky.de/"
          ></Conference>
          <Conference
            name="DDD China"
            image={data.dddchina.childImageSharp.fluid}
            location="Beijing, China"
            date="November"
            website="http://ddd-china.com/"
          ></Conference>
          <Conference
            name="DDD Taiwan"
            image={data.dddtaiwan.childImageSharp.fluid}
            location="Taipei, Taiwan"
            date="November"
            website="https://www.ddd-tw.com/"
          ></Conference>
        </div>
      </div>
    </div>
  )
}

export default Conferences
