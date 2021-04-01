import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import tw from "twin.macro"

import OutlineBlueButton from "../components/outline-blue-button"
import ThreeDBlueButton from "../components/three-d-blue-button"
import UpcomingSession from "../sessions/upcoming-session"

// @ts-ignore
const VDDDInfo: FC = ({ data }) => {
  return (
    <div tw="flex flex-col items-center justify-start w-full p-4 lg:p-8 sm:w-5/6 lg:w-full sm:rounded-lg sm:shadow-lg bg-white space-y-4">
      <GatsbyImage
        image={data.vdddLogoTp.childImageSharp.gatsbyImageData}
        alt="Virtual DDD"
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
          href="https://feedback.userreport.com/a15e4e61-2323-40a1-90b4-1267e010e35c"
        >
          Call for Speakers
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
    {
      backgroundImage: file(relativePath: { eq: "kandddinsky.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      slackLogo: file(relativePath: { eq: "logo/slack_icon.png" }) {
        childImageSharp {
          gatsbyImageData(height: 24, width: 24, layout: FIXED)
        }
      }
      twitterLogo: file(relativePath: { eq: "logo/twitter.png" }) {
        childImageSharp {
          gatsbyImageData(height: 24, width: 24, layout: FIXED)
        }
      }
      vdddLogoTp: file(relativePath: { eq: "logo/vddd_logo_tp.png" }) {
        childImageSharp {
          gatsbyImageData(height: 32, width: 135, layout: FIXED)
        }
      }
      upcoming: allContentYaml(
        filter: { upcomingSessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          ...upcomingSession
        }
      }
    }
  `)
  const image = getImage(data.backgroundImage)
  const bgImage = image && convertToBgImage(image)

  const upcomingSession = data.upcoming.nodes[0].upcomingSessions[0]
  const isUpcomingSession = !!upcomingSession && upcomingSession.id !== "none"
  return (
    <BackgroundImage
      tw="flex flex-col items-center justify-center bg-scroll h-auto lg:flex-row-reverse lg:items-start relative"
      {...bgImage}
    >
      <div tw="z-0 absolute inset-0 bg-gray-900 opacity-75" />
      <div tw="w-full lg:w-1/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8">
        <VDDDInfo data={data} />
        <div tw="flex items-center justify-center space-x-4 m-4 sm:m-6 lg:m-8">
          <OutlineBlueButton
            tw="lg:text-xl"
            href="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
          >
            Meetup
          </OutlineBlueButton>
          <OutlineBlueButton
            tw="lg:text-xl"
            href="https://github.com/ddd-cqrs-es/slack-community"
          >
            <GatsbyImage
              image={data.slackLogo.childImageSharp.gatsbyImageData}
              tw="mr-2 h-8"
              alt="Slack"
            />
            Slack community
          </OutlineBlueButton>
          <OutlineBlueButton
            tw="lg:text-xl"
            href="https://twitter.com/virtualDDD"
          >
            <GatsbyImage
              image={data.twitterLogo.childImageSharp.gatsbyImageData}
              tw="mr-2 h-8"
              alt="Twitter"
            />
            Twitter
          </OutlineBlueButton>
        </div>
      </div>

      <div tw="w-full lg:w-2/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8">
        <div css={!isUpcomingSession && tw`invisible`}>
          <UpcomingSession session={upcomingSession} />
        </div>
        <OutlineBlueButton tw="lg:text-xl" to="/sessions">
          Show all sessions
        </OutlineBlueButton>
      </div>
    </BackgroundImage>
  )
}

export default Hero
