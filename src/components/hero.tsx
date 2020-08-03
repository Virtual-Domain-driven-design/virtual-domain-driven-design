import React, { ReactElement, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import SessionsData from "./../content/sessions.json"

import BackgroundImage from "gatsby-background-image"

interface Props {}

const SocialLink = ({ url, label }) => {
  return (
    <a
      className="text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
      href={url}
      target="_blank"
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
      <div className="mb-4 text-justify">
        A community driven meetup for people who want to get more in-depth
        knowledge of DDD from anywhere at anytime, join this virtual DDD
        community for online panel discussions, community talks and more.
        Everybody is welcome to join us, we love learning and growing together.
      </div>
      <div className="mb-4 font-semibold">
        Share your deep, creative, productive or crazy ideas!
      </div>
      <a
        className="p-4 bg-blue-500 floating-action-button text-white"
        href="https://sessionize.com/virtual-ddd-meetup"
        target="_blank"
      >
        Propose a session
      </a>
    </div>
  )
}

const Session = () => {
  const nextSession = SessionsData.upcoming_sessions[0]
  return (
    <div className="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
      <div className="font-bold">{nextSession.title}</div>
      <div className="text-sm text-gray-600">
        {nextSession.date} - {nextSession.time}
      </div>
      <img className="w-full" src={nextSession.img}></img>
      <div className="py-2 text-justify">{nextSession.description}</div>
      <div className="mt-4 pt-2 border-t border-solid flex items-center justify-start flex-wrap">
        {nextSession.links.map((data, index) => {
          return (
            <a
              className="bg-gray-200 floating-action-button p-2 m-2"
              href={data.url}
              target="_blank"
            >
              {data.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

const Hero = ({}: Props): ReactElement => {
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
          <SocialLink
            url="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
            label="Meetup"
          ></SocialLink>
          <SocialLink url="https://j.mp/ddd-es-cqrs" label="Slack"></SocialLink>
          <SocialLink
            url="https://j.mp/ddd-es-cqrs"
            label="Twitter"
          ></SocialLink>
        </div>
      </div>

      <div className="w-full mt-8 lg:w-2/3  flex flex-col items-center justify-center">
        <div className="w-5/6 z-10 flex flex-col items-center">
          <div className="w-full hidden md:flex items-stretch justify-start my-2">
            <Session></Session>
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
