import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import tw from "twin.macro"

import OutlineBlueButton from "./core/outline-blue-button"
import ThreeDBlueButton from "./core/three-d-blue-button"
import UpcomingSession from "./upcoming-session"

const VDDDInfo: FC = ({ data }) => {
  return (
    <div tw="flex flex-col items-center justify-start w-full p-4 lg:p-8 sm:w-5/6 lg:w-full sm:rounded-lg sm:shadow-lg bg-white space-y-4">
      <Img
        fixed={data.vdddLogoTp.childImageSharp.fixed}
        tw="hidden lg:block object-contain h-8"
      />
      <div tw="text-center">
        A community driven site for people who want to get more in-depth
        knowledge of Domain-Driven Design. Go to the learning DDD part of the
        site, contribute your knowledge to the world on our website or attend
        one of our meetups anywhere at anytime. Everybody is welcome to join us,
        we love learning and growing together.
      </div>
      <div tw="font-semibold">
        Share your deep, creative, productive or crazy ideas!
      </div>
      <div tw="flex flex-row space-x-4">
        <ThreeDBlueButton
          tw="lg:text-lg"
          href="https://sessionize.com/virtual-ddd-meetup"
        >
          Propose a Meetup
        </ThreeDBlueButton>
        <ThreeDBlueButton
          tw="lg:text-lg"
          href="https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design"
        >
          Contribute on Github
        </ThreeDBlueButton>
        <ThreeDBlueButton tw="lg:text-lg" href="https://virtualddd.com/admin">
          Contribute on Netlify CMS
        </ThreeDBlueButton>
      </div>
    </div>
  )
}

const Hero: FC = () => {
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
  const isUpcomingSession =
    data.allContentYaml.nodes[0].upcomingSessions.length > 0 &&
    data.allContentYaml.nodes[0].upcomingSessions[0].title

  return (
    <BackgroundImage
      tw="flex flex-col items-center justify-center bg-scroll h-auto lg:flex-row-reverse lg:items-start relative"
      fluid={imageData}
    >
      <div tw="z-0 absolute inset-0 bg-gray-900 opacity-75"></div>
      <div tw="w-full lg:w-1/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8">
        <VDDDInfo data={data}></VDDDInfo>
        <div tw="flex items-center justify-center space-x-4 m-4 sm:m-6 lg:m-8">
          <OutlineBlueButton
            tw="lg:text-xl"
            href="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
          >
            Meetup
          </OutlineBlueButton>
          <OutlineBlueButton tw="lg:text-xl" href="https://j.mp/ddd-es-cqrs">
            Slack
          </OutlineBlueButton>
          <OutlineBlueButton
            tw="lg:text-xl"
            href="https://twitter.com/virtualDDD"
          >
            Twitter
          </OutlineBlueButton>
        </div>
      </div>

      <div
        tw="w-full lg:w-2/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8"
        css={!isUpcomingSession && tw`invisible`}
      >
        <UpcomingSession
          session={data.allContentYaml.nodes[0].upcomingSessions[0]}
        ></UpcomingSession>
        <OutlineBlueButton tw="lg:text-xl" to="/sessions">
          Show all sessions
        </OutlineBlueButton>
      </div>
    </BackgroundImage>
  )
}

export default Hero
