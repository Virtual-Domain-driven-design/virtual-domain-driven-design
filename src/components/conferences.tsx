import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Conference = ({ name, image, location, date, website }) => {
  return (
    <a
      key={name}
      className="group floating-action-button bg-white w-full sm:w-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start"
      href={website}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center justify-start">
        <div className="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {name}
        </div>
        <div className="text-gray-800 text-sm text-center">{date}</div>
        <Img
          fluid={image}
          className="my-2 w-64 h-32"
          imgStyle={{ objectFit: "contain" }}
        />
        <div className="text-gray-800 text-sm text-center">{location}</div>
      </div>
    </a>
  )
}

const Conferences = (): ReactElement => {
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
    }
  `)
  return (
    <div className="section bg-gray-200" id="conferencess">
      <div className="w-full flex flex-col items-center justify-start">
        <h2 className="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Conferences</h2>
        <div className="md:w-5/6">
          <div className="flex justify-center flex-wrap">
            <Conference
              name="Domain-Driven Design Europe"
              image={data.dddeu.childImageSharp.fluid}
              location="Amsterdam, Netherlands"
              date="February"
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conferences
