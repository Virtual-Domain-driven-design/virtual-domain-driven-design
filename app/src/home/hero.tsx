import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

import "twin.macro"
import "styled-components/macro"

import OutlineBlueButton from "../components/outline-blue-button"
import ThreeDBlueButton from "../components/three-d-blue-button"
import UpcomingSession from "../sessions/upcoming-session"
import { VdddLogo, DiscordLogo,MastodonLogo, TwitterLogo } from "../components/logos"
import NoUpcoming from "../sessions/no-upcoming"

const VDDDInfo = () => {
  return (
    <div tw="flex flex-col items-center justify-start w-full p-4 lg:p-8 sm:w-5/6 lg:w-full sm:rounded-lg sm:shadow-lg bg-white space-y-4">
      <VdddLogo twContent="hidden lg:block object-contain h-8" />
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

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      backgroundImage: file(relativePath: { eq: "kandddinsky.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      upcoming: allContentYaml(
        filter: { upcomingSessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          ...upcomingSession
        }
      }
      allSessions: allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          ...session
        }
      }
    }
  `)
  const image = getImage(data.backgroundImage)
  const bgImage = image && convertToBgImage(image)

  const upcomingSession = data.upcoming.nodes[0].upcomingSessions[0]
  const lastSession = data.allSessions.nodes[0].sessions[0]
  const isUpcomingSession = !!upcomingSession && upcomingSession.id !== "none"
  return (<BackgroundImage
      tw="flex flex-col items-center justify-center bg-scroll h-auto lg:flex-row-reverse lg:items-start relative"
      {...bgImage}
    >
      <div tw="z-0 absolute inset-0 bg-gray-900 opacity-75" />
      <div tw="w-full lg:w-1/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8">
        <VDDDInfo />
        <div tw="flex flex-wrap items-center justify-center space-x-4 m-4 sm:m-6 lg:m-8">
          <OutlineBlueButton
            tw="lg:text-sm flex"
            href="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
          >
            Meetup
          </OutlineBlueButton>
          <OutlineBlueButton
            tw="lg:text-sm flex"
            href="https://discord.gg/sEZGSHNNbH"
          >
            <DiscordLogo />
            <div tw="pl-2">Discord</div>
          </OutlineBlueButton>
        </div>
        <div tw="flex flex-wrap items-center justify-center space-x-4 m-4 sm:m-6 lg:m-8">
          <OutlineBlueButton
            tw="lg:text-sm flex"
            href="https://techhub.social/@virtualddd"
          >
            <MastodonLogo />
            <div tw="pl-2"><a rel="me" href="https://techhub.social/@virtualddd">Mastodon</a></div>
          </OutlineBlueButton>
          <OutlineBlueButton
            tw="lg:text-sm flex"
            href="https://twitter.com/virtualDDD"
          >
            <TwitterLogo />
            <div tw="pl-2">Twitter</div>
          </OutlineBlueButton>
        </div>
      </div>

      <div tw="w-full lg:w-2/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8">
        {isUpcomingSession ? (
          <div>
            <UpcomingSession session={upcomingSession} />
          </div>
        ) : (
          <div>
            <NoUpcoming>
              {/* UpcomingSession sounds a bit off here */}
              <UpcomingSession session={lastSession} />
            </NoUpcoming>
          </div>
        )}
        <OutlineBlueButton tw="lg:text-xl space-x-4 m-4" to="/sessions">
          Show all sessions
        </OutlineBlueButton>
      </div>
    </BackgroundImage>
  )
}

export default Hero
