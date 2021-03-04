import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { FC, useState } from "react"
import "twin.macro"

import BackgroundImage from "gatsby-background-image"
import BooksOverview from "../components/books-overview"
import GithubRepoOverview from "../components/github-repos-overview"
import Layout from "../templates/layout"
import LevelFilter from "../components/level-filter"
import PapersOverview from "../components/papers-overview"
import PodcastsOverview from "../components/podcasts-overview"
import SEO from "../components/seo"
import SessionsOverview from "./learning-ddd/sessions-overview"
import ThreeDBlueButton from "./../components/core/three-d-blue-button"
import VideoOverview from "../components/video-overview"
import { ContentLevel } from "../sessions/session"

type LearningDDDInfoProps = {
  img: any
}

const LearningDDDInfo: FC<LearningDDDInfoProps> = ({ img }) => {
  return (
    <div tw="w-full p-4 sm:mt-8 sm:w-5/6 sm:rounded-lg sm:shadow-lg bg-white  flex flex-col items-center justify-start">
      <Img fixed={img} className="hidden lg:block object-contain} h-8 mb-4" />
      <div tw="mb-4 text-center">
        Below you can find all the curated content by the Domain-Driven Design
        community. You can easily filtered these based on your knowledge level,
        the content you are interested in and soon also on tags! We hope it
        helps you on your Domain-Driven Design journey, and if you have any
        feedback or want to contribute, please do!
      </div>
      <div tw="mb-4 font-semibold">
        Share your knowledge with the DDD world!
      </div>
      <div tw="flex flex-row space-x-4">
        <ThreeDBlueButton href="https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design">
          Contribute on Github
        </ThreeDBlueButton>
        <ThreeDBlueButton href="https://virtualddd.com/admin">
          Contribute on Netlify CMS
        </ThreeDBlueButton>
      </div>
    </div>
  )
}

const LearningDDD: FC = () => {
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

  const [levelFilter, setLevelFilter] = useState([
    ContentLevel.All,
    ContentLevel.Beginner,
    ContentLevel.Intermediate,
    ContentLevel.Advanced
    ])

  return (
    <Layout>
      <SEO
        title="Learn Domain-Driven Design"
        description="The place for all your Domain-Driven Design and Software Architecture content"
      />
      <BackgroundImage
        Tag="section"
        className="hero flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start"
        fluid={data.backgroundImage.childImageSharp.fluid}
      >
        <div tw="z-0 absolute inset-0 bg-gray-900 opacity-75"></div>
        <div tw="w-full m-4 lg:w-1/3 flex flex-col items-center justify-center z-10">
          <LearningDDDInfo img={data.vdddLogoTp.childImageSharp.fixed} />
        </div>
        <div tw="w-full mt-8 lg:w-2/3 flex flex-col items-center justify-center z-10">
          <div tw="w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
            <h2 tw="text-3xl font-bold text-white flex justify-center">
              Filter Content
            </h2>
            <LevelFilter setLevelFilter={setLevelFilter} />
          </div>
        </div>
      </BackgroundImage>

      <GithubRepoOverview levelFilter={levelFilter}></GithubRepoOverview>
      <VideoOverview levelFilter={levelFilter}></VideoOverview>
      <BooksOverview levelFilter={levelFilter}></BooksOverview>
      <PapersOverview levelFilter={levelFilter}></PapersOverview>
      <SessionsOverview levelFilter={levelFilter}></SessionsOverview>
      <PodcastsOverview levelFilter={levelFilter}></PodcastsOverview>
    </Layout>
  )
}

export default LearningDDD
