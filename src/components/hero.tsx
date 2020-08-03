import React, { ReactElement, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
        <div className="w-full p-4 sm:mt-8 sm:w-5/6 sm:rounded-lg sm:shadow-lg bg-white  flex flex-col items-center justify-start">
          <Img
            fixed={data.vdddLogoTp.childImageSharp.fixed}
            className="hidden lg:block object-contain h-8 mb-4"
          />
          <div className="mb-4 text-justify">
            A community driven meetup for people who want to get more in-depth
            knowledge of DDD from anywhere at anytime, join this virtual DDD
            community for online panel discussions, community talks and more.
            Everybody is welcome to join us, we love learning and growing
            together.
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
            <div className="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
              <div className="font-bold">
                [Panel] What can we learn from open-source with Matteo Collina
              </div>
              <div className="text-sm text-gray-600">
                Tuesday, August 4th. 2020
              </div>
              <img
                className="w-full"
                src="https://secure.meetupstatic.com/photos/event/5/7/8/8/highres_491542408.jpeg"
              ></img>
              <div className="py-2 text-justify">
                Thanks to Krisztina we will have Matteo Collina as a special
                guest on our next panel. Matteo is a long time Nodejs
                contributor and TSC member. Open-source software is a success
                story, and undoubtedly one, we can learn from. In OSS the clocks
                tick differently, but it is software built for users, to solve
                problems - both relatively unknowns factors at the beginning. So
                what can DDD developers for businesses learn from that
                experience: how to handle these uncertainties, how is the
                Ubiquitous Language developed in the Open source world? How do
                you do design in OSS? And many more questions!
              </div>
              <div className="mt-4 pt-2 border-t border-solid flex items-center justify-start flex-wrap">
                <a
                  className="bg-gray-200 floating-action-button p-2 m-2"
                  href="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/272201468/"
                  target="_blank"
                >
                  The Event on Meetup
                </a>
              </div>
            </div>
          </div>
          <a
            className="text-xl mb-4 p-2 cursor-pointer text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
            href="/sessions"
            target="_blank"
          >
            Show all sessions
          </a>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
