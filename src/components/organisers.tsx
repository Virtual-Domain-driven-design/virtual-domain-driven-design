import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Organiser = ({
  name,
  image,
  tagline,
  website,
  twitter,
  linkedin,
  data,
}) => {
  return (
    <div
      key={name}
      className="bg-white py-4 m-4 rounded-lg shadow-md flex flex-col items-stretch justify-between"
    >
      <div className="flex flex-col items-center justify-start">
        <div className="text-gray-800 text-sm text-center">{name}</div>
        <div className="text-gray-700 text-xs italic text-center">
          {tagline}
        </div>
        <Img
          className="my-2 w-64 h-64"
          fluid={image}
          imgStyle={{ objectFit: "contain" }}
        ></Img>
      </div>
      <div className="my-1 w-full flex items-center justify-around">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-button rounded-full"
        >
          <Img
            className="h-10 w-10"
            fluid={data.website.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-icon floating-action-button rounded-full"
        >
          <Img
            className="h-10 w-10"
            fluid={data.twitter.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-icon floating-action-button rounded-full"
        >
          <Img
            className="h-10 w-10"
            fluid={data.linkedin.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </a>
      </div>
    </div>
  )
}

const Organisers = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      website: file(relativePath: { eq: "logo/website.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "logo/twitter.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "logo/linkedin.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zsofia: file(relativePath: { eq: "organisers/zsofia.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marco: file(relativePath: { eq: "organisers/MarcoHeimeshoff.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kenny: file(relativePath: { eq: "organisers/kenny.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maxime: file(relativePath: { eq: "organisers/photo_maxime_s.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      evelyn: file(relativePath: { eq: "organisers/evelyn.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kacper: file(relativePath: { eq: "organisers/kacper.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      krisztina: file(relativePath: { eq: "organisers/katy2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="section bg-gray-200" id="organisers">
      <div className="mt-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2>Organisers</h2>
        <div className="w-full flex-wrap flex flex-col sm:flex-row justify-center items-stretch">
          <Organiser
            name="Zsofia Herendi"
            image={data.zsofia.childImageSharp.fluid}
            tagline="Flow addict PM"
            website="https://www.zherendi.com/"
            twitter="ZHerendi"
            linkedin="in/zsófia-herendi-2296b48"
            data={data}
          ></Organiser>
          <Organiser
            name="Marco Heimeshoff"
            image={data.marco.childImageSharp.fluid}
            tagline="Business software artist"
            website="https://www.heimeshoff.de/"
            twitter="Heimeshoff"
            linkedin="in/heimeshoff"
            data={data}
          ></Organiser>
          <Organiser
            name="Kenny Baas-Schwegler"
            image={data.kenny.childImageSharp.fluid}
            tagline="Deep Democratic modeller"
            website="https://baasie.com"
            twitter="kenny_baas"
            linkedin="in/kenny-baas"
            data={data}
          ></Organiser>
          <Organiser
            name="Maxime Sanglan-Charlier"
            image={data.maxime.childImageSharp.fluid}
            tagline="Connecting people circa 97"
            website="https://ncrafts.io"
            twitter="__MaxS__"
            linkedin="company/ncrafts"
            data={data}
          ></Organiser>
          <Organiser
            name="Evelyn van Kelle"
            image={data.evelyn.childImageSharp.fluid}
            tagline="Socio-technical super fan"
            website="https://medium.com/@e.vankelle"
            twitter="EvelynvanKelle"
            linkedin="in/evelynvankelle"
            data={data}
          ></Organiser>
          <Organiser
            name="Kacper Gunia"
            image={data.kacper.childImageSharp.fluid}
            tagline="Domain Explorer"
            website="https://domaincentric.net/"
            twitter="cakper"
            linkedin="in/cakper"
            data={data}
          ></Organiser>
          <Organiser
            name="Krisztina Hirth"
            image={data.krisztina.childImageSharp.fluid}
            tagline="Coding Architect"
            website="https://yellow-brick-code.org/"
            twitter="YellowBrickC"
            linkedin=""
            data={data}
          ></Organiser>
        </div>
      </div>
    </div>
  )
}

export default Organisers
