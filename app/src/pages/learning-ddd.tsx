import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React, { FC, useState } from "react"
import "twin.macro"
import "styled-components/macro"

import BackgroundImage from "gatsby-background-image"
import BooksOverview from "../learning-ddd/books-overview"
import GithubRepoOverview from "../learning-ddd/github-repos-overview"
import Layout from "../templates/layout"
import LevelFilter, { allLevels } from "../components/level-filter"
import PapersOverview from "../learning-ddd/papers-overview"
import PodcastsOverview from "../learning-ddd/podcasts-overview"
import SEO from "../components/seo"
import SessionsOverview from "../learning-ddd/sessions-overview"
import ThreeDBlueButton from "../components/three-d-blue-button"
import VideoOverview from "../learning-ddd/video-overview"
import { VdddLogo } from "../components/logos"

const LearningDDDInfo = () => {
  return (
    <div tw="w-full p-4 sm:mt-8 sm:w-5/6 sm:rounded-lg sm:shadow-lg bg-white  flex flex-col items-center justify-start">
      <VdddLogo twContent="hidden lg:block object-contain} h-8 mb-4" />
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
    {
      backgroundImage: file(relativePath: { eq: "kandddinsky.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const [levelFilter, setLevelFilter] = useState(allLevels)
  const image = getImage(data.backgroundImage)
  const bgImage = image && convertToBgImage(image)
  return (
    <Layout>
      <SEO
        title="Learn Domain-Driven Design"
        description="The place for all your Domain-Driven Design and Software Architecture content"
      />
      <BackgroundImage
        Tag="section"
        className="hero flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start"
        {...bgImage}
      >
        <div tw="z-0 absolute inset-0 bg-gray-900 opacity-75" />
        <div tw="w-full m-4 lg:w-1/3 flex flex-col items-center justify-center z-10">
          <LearningDDDInfo />
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

      <GithubRepoOverview levelFilter={levelFilter} />
      <VideoOverview levelFilter={levelFilter} />
      <BooksOverview levelFilter={levelFilter} />
      <PapersOverview levelFilter={levelFilter} />
      <SessionsOverview levelFilter={levelFilter} />
      <PodcastsOverview levelFilter={levelFilter} />
    </Layout>
  )
}

export default LearningDDD
