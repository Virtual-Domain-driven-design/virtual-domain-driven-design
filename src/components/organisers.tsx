import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { ReactElement, FC } from "react"
import tw from "twin.macro"

interface OrganiserProps {
  name: string
  image: any
  tagline: string
  website: string
  twitter: string
  linkedin?: string
  data: any
}

const Organiser: FC<OrganiserProps> = ({
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
      tw="bg-white w-64 py-4 m-4 rounded-lg shadow-md flex flex-col items-stretch justify-between"
    >
      <div tw="flex flex-col items-center justify-start">
        <div tw="text-gray-800 text-sm text-center">{name}</div>
        <div tw="text-gray-700 text-xs italic text-center">{tagline}</div>
        <Img tw="my-2 w-64 h-64 object-cover" fluid={image}></Img>
      </div>
      <div tw="my-1 w-full flex items-center justify-around">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          tw="rounded-full transform scale-100 duration-100 hover:scale-110"
          css={!website && tw`hidden`}
        >
          <Img
            tw="h-10 w-10"
            fluid={data.website.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </a>
        <a
          href={"https://twitter.com/" + twitter}
          target="_blank"
          rel="noopener noreferrer"
          tw="rounded-full transform scale-100 duration-100 hover:scale-110"
          css={!twitter && tw`hidden`}
        >
          <Img
            tw="h-10 w-10"
            fluid={data.twitter.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </a>
        <a
          href={"https://linkedin.com/" + linkedin}
          target="_blank"
          rel="noopener noreferrer"
          tw="rounded-full transform scale-100 duration-100 hover:scale-110"
          css={!linkedin && tw`hidden`}
        >
          <Img
            tw="h-10 w-10"
            fluid={data.linkedin.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </a>
      </div>
    </div>
  )
}

const Organisers: FC = ({}) => {
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
    <div
      tw="bg-gray-100 flex flex-col items-center justify-center m-4"
      id="organisers"
    >
      <div tw="mt-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
          Organisers
        </h2>
        <div tw="w-full flex-wrap flex flex-col sm:flex-row justify-center items-stretch">
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
            data={data}
          ></Organiser>
        </div>
      </div>
    </div>
  )
}

export default Organisers
