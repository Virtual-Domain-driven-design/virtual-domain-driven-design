import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"

import BackgroundImage from "gatsby-background-image"
import BooksOverview from "../components/books-overview"
import GithubRepoOverview from "../components/github-repos-overview"
import Layout from "../templates/layout"
import LevelFilter from "../components/level-filter"
import PapersOverview from "../components/papers-overview"
import PodcastsOverview from "../components/podcasts-overview"
import SEO from "../components/seo"
import SessionsOverview from "../components/sessions-overview"
import VideoOverview from "../components/video-overview"

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
    }
  `)

  const [levelFilter, setLevelFilter] = useState([
    "all",
    "beginner",
    "intermediate",
    "advanced",
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
        <div className="overlay"></div>
        <div className="w-full lg:w-1/3 m-4 flex flex-col items-center justify-center z-10">
          <LevelFilter setLevelFilter={setLevelFilter} />
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
