import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import tw from "twin.macro"
import "styled-components/macro"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import { ChildImageSharp } from "../components/logos/vddd"

type SocialLogos = {
  websiteLogo: ChildImageSharp
  twitterLogo: ChildImageSharp
  linkedInLogo: ChildImageSharp
  mastodonLogo: ChildImageSharp
}

type Images = {
  zsofia: ChildImageSharp
  marco: ChildImageSharp
  kenny: ChildImageSharp
  evelyn: ChildImageSharp
  maxime: ChildImageSharp
  kacper: ChildImageSharp
  krisztina: ChildImageSharp
  andrea: ChildImageSharp
  diana: ChildImageSharp
}

type OrganiserProps = {
  name: string
  image: IGatsbyImageData
  tagline: string
  website?: string
  twitter?: string
  mastodon?: string
  linkedin?: string
  socialLogos: SocialLogos
}

const Organiser = ({
  name,
  image,
  tagline,
  website,
  twitter,
  mastodon,
  linkedin = "",
  socialLogos,
}: OrganiserProps) => {
  return (
    <div
      key={name}
      tw="bg-white w-64 py-4 m-4 rounded-lg shadow-md flex flex-col items-stretch justify-between"
    >
      <div tw="flex flex-col items-center justify-start">
        <div tw="text-gray-800 text-sm text-center">{name}</div>
        <div tw="text-gray-700 text-xs italic text-center">{tagline}</div>
        <GatsbyImage
          image={image}
          alt={name}
          tw="my-2 w-64 h-64 object-cover"
        />
      </div>
      <div tw="my-1 w-full flex items-center justify-around">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          tw="rounded-full transform scale-100 duration-100 hover:scale-110"
          css={!website && tw`hidden`}
        >
          <GatsbyImage
            image={socialLogos.websiteLogo.childImageSharp.gatsbyImageData}
            alt={website}
            tw="h-10 w-10 object-contain"
          />
        </a>
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          tw="rounded-full transform scale-100 duration-100 hover:scale-110"
          css={!twitter && tw`hidden`}
        >
          <GatsbyImage
            image={socialLogos.twitterLogo.childImageSharp.gatsbyImageData}
            alt={twitter}
            tw="h-10 w-10 object-contain"
          />
        </a>
        <a
          href={`${mastodon}`}
          target="_blank"
          rel="noopener noreferrer"
          tw="rounded-full transform scale-100 duration-100 hover:scale-110"
          css={!mastodon && tw`hidden`}
        >
          <GatsbyImage
            image={socialLogos.mastodonLogo.childImageSharp.gatsbyImageData}
            alt={mastodon}
            tw="h-10 w-10 object-contain"
          />
        </a>
        <a
          href={`https://linkedin.com/${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          tw="rounded-full transform scale-100 duration-100 hover:scale-110"
          css={!linkedin && tw`hidden`}
        >
          <GatsbyImage
            image={socialLogos.linkedInLogo.childImageSharp.gatsbyImageData}
            alt={linkedin}
            tw="h-10 w-10 object-contain"
          />
        </a>
      </div>
    </div>
  )
}

const Organisers = () => {
  const images = useStaticQuery<SocialLogos & Images>(graphql`
    {
      websiteLogo: file(relativePath: { eq: "logo/website.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      twitterLogo: file(relativePath: { eq: "logo/twitter.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      linkedInLogo: file(relativePath: { eq: "logo/linkedin.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      mastodonLogo: file(relativePath: { eq: "logo/mastodon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      zsofia: file(relativePath: { eq: "organisers/zsofia.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      marco: file(relativePath: { eq: "organisers/MarcoHeimeshoff.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      kenny: file(relativePath: { eq: "organisers/kenny.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      maxime: file(relativePath: { eq: "organisers/photo_maxime_s.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      evelyn: file(relativePath: { eq: "organisers/evelyn.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      kacper: file(relativePath: { eq: "organisers/kacper.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      krisztina: file(relativePath: { eq: "organisers/katy2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      andrea: file(relativePath: { eq: "organisers/andrea.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      diana: file(relativePath: { eq: "organisers/diana.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const logos: SocialLogos = {
    twitterLogo: images.twitterLogo,
    linkedInLogo: images.linkedInLogo,
    websiteLogo: images.websiteLogo,
    mastodonLogo: images.mastodonLogo,
  }
  return (
    <div
      tw="bg-gray-100 flex flex-col items-center justify-center m-4"
      id="organisers"
    >
      <div tw="mt-8 w-4/5 lg:w-2/3 xl:w-1/2">
        <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-center text-3xl">
          Organisers
        </h2>
        <div tw="w-full flex-wrap flex flex-col sm:flex-row justify-center items-stretch">
          <Organiser
            name="Krisztina Hirth"
            image={images.krisztina.childImageSharp.gatsbyImageData}
            tagline="Coding Architect"
            website="https://yellow-brick-code.org/"
            mastodon="https://mastodon.social/@yellowbrickc"
            linkedin="in/christina-hirth-yellowbrickcode?locale=en_US"
            socialLogos={logos}
          />
          <Organiser
            name="Kenny Baas-Schwegler"
            image={images.kenny.childImageSharp.gatsbyImageData}
            tagline="Deep Democratic modeller"
            website="https://baasie.com"
            twitter="kenny_baas"
            linkedin="in/kenny-baas"
            socialLogos={logos}
          />
          <Organiser
            name="Andrea Magnorsky"
            image={images.andrea.childImageSharp.gatsbyImageData}
            tagline="Systems and Functional Programming"
            website="https://www.roundcrisis.com"
            mastodon="https://types.pl/@roundcrisis"
            linkedin="in/magnorsky"
            socialLogos={logos}
          />
          <Organiser
            name="Diana Montalion"
            image={images.diana.childImageSharp.gatsbyImageData}
            tagline="Nonlinear thinker"
            twitter="dianamontalion"
            mastodon="https://hachyderm.io/@diana"
            linkedin="in/dianamontalion/"
            socialLogos={logos}
          />
          <Organiser
            name="Marco Heimeshoff"
            image={images.marco.childImageSharp.gatsbyImageData}
            tagline="Business software artist"
            website="https://www.heimeshoff.de/"
            twitter="Heimeshoff"
            linkedin="in/heimeshoff"
            socialLogos={logos}
          />
          <Organiser
            name="Zsofia Herendi"
            image={images.zsofia.childImageSharp.gatsbyImageData}
            tagline="Flow addict PM"
            website="https://www.zherendi.com/"
            twitter="ZHerendi"
            linkedin="in/zsófia-herendi-2296b48"
            socialLogos={logos}
          />
          <Organiser
            name="Evelyn van Kelle"
            image={images.evelyn.childImageSharp.gatsbyImageData}
            tagline="Socio-technical super fan"
            website="https://medium.com/@e.vankelle"
            twitter="EvelynvanKelle"
            linkedin="in/evelynvankelle"
            socialLogos={logos}
          />
          <Organiser
            name="Maxime Sanglan-Charlier"
            image={images.maxime.childImageSharp.gatsbyImageData}
            tagline="Connecting people circa 97"
            website="https://blog.onehundredacorns.com/"
            twitter="__MaxS__"
            linkedin="company/ncrafts"
            socialLogos={logos}
          />
          <Organiser
            name="Kacper Gunia"
            image={images.kacper.childImageSharp.gatsbyImageData}
            tagline="Domain Explorer"
            website="https://domaincentric.net/"
            twitter="cakper"
            linkedin="in/cakper"
            socialLogos={logos}
          />
        </div>
      </div>
    </div>
  )
}

export default Organisers
