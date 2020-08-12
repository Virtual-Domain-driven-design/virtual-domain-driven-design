import React, { ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import BlueButton from "./core/blue-button"

import UpcomingSession from "./upcoming-session"

import BackgroundImage from "gatsby-background-image"

const Sociallink = ({ url, label }) => {
  return (
    <a
      className="text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}

const VDDDInfo = ({ data }) => {
  return (
    <div className="w-full p-4 sm:mt-8 sm:w-5/6 sm:rounded-lg sm:shadow-lg bg-white  flex flex-col items-center justify-start">
      <Img
        fixed={data.vdddLogoTp.childImageSharp.fixed}
        className="hidden lg:block object-contain h-8 mb-4"
      />
      <div className="mb-4 text-center">
        A community driven site for people who want to get more in-depth
        knowledge of Domain-Driven Design. Go to the learning DDD part of the
        site, contribute your knowledge to the world on our website or attend
        one of our meetups anywhere at anytime. Everybody is welcome to join us,
        we love learning and growing together.
      </div>
      <div className="mb-4 font-semibold">
        Share your deep, creative, productive or crazy ideas!
      </div>
      <div className="flex flex-row space-x-4">
        <BlueButton href="https://sessionize.com/virtual-ddd-meetup">
          Propose a Meetup
        </BlueButton>
        <BlueButton href="https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design">
          Contribute on Github
        </BlueButton>
        <BlueButton href="https://virtualddd.com/admin">
          Contribute on Netlify CMS
        </BlueButton>
      </div>
    </div>
  )
}

const Hero = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "kandddinsky.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vdddLogoTp: file(relativePath: { eq: "logo/vddd_logo_tp.png" }) {
        childImageSharp {
          fixed(height: 32, width: 135) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allContentYaml(
        filter: { upcomingSessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          upcomingSessions {
            date
            description
            img
            time
            title
            links {
              label
              url
            }
          }
        }
      }
    }
  `)
  const imageData = data.backgroundImage.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className="hero flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start"
      fluid={imageData}
    >
      <div className="overlay"></div>
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center z-10">
        <VDDDInfo data={data}></VDDDInfo>
        <div className="mt-4 flex items-center justify-center">
          <Sociallink
            url="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
            label="Meetup"
          ></Sociallink>
          <Sociallink url="https://j.mp/ddd-es-cqrs" label="Slack"></Sociallink>
          <Sociallink
            url="https://j.mp/ddd-es-cqrs"
            label="Twitter"
          ></Sociallink>
        </div>
      </div>

      <div className="w-full mt-8 lg:w-2/3  flex flex-col items-center justify-center">
        <div className="w-5/6 z-10 flex flex-col items-center">
          <div className="w-full hidden md:flex items-stretch justify-start my-2">
            <UpcomingSession
              index="0"
              session={data.allContentYaml.nodes[0].upcomingSessions[0]}
            ></UpcomingSession>
          </div>
          <Link
            to="/sessions"
            className="text-xl mb-4 p-2 cursor-pointer text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
          >
            Show all sessions
          </Link>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
