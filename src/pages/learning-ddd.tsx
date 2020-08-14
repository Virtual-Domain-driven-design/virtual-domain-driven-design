import React, { ReactElement, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../templates/layout"
import GithubRepoOverview from "../components/github-repos-overview"
import BooksOverview from "../components/books-overview"
import PodcastsOverview from "../components/podcasts-overview"
import SessionsOverview from "../components/sessions-overview"
import VideoOverview from "../components/video-overview"
import PapersOverview from "../components/papers-overview"

import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

function LearningDDD(): ReactElement {
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
  const [allLevelsClass, setAllLevelsClass] = useState("levelbtn active")
  const [beginnerLevelClass, setBeginnerLevelClass] = useState("levelbtn")
  const [intermediateLevelClass, setIntermediateLevelClass] = useState(
    "levelbtn"
  )
  const [advancedLevelClass, setAdvancedLevelClass] = useState("levelbtn")

  const levelButtonClicked = (button) => {
    if (button === "all") {
      setAllLevelsClass("levelbtn active")
      setBeginnerLevelClass("levelbtn")
      setIntermediateLevelClass("levelbtn")
      setAdvancedLevelClass("levelbtn")
      setLevelFilter(["all", "beginner", "intermediate", "advanced"])
    }
    if (button === "beginner") {
      setAllLevelsClass("levelbtn")
      setBeginnerLevelClass("levelbtn active")
      setIntermediateLevelClass("levelbtn")
      setAdvancedLevelClass("levelbtn")
      setLevelFilter(["all", "beginner"])
    }
    if (button === "intermediate") {
      setAllLevelsClass("levelbtn")
      setBeginnerLevelClass("levelbtn")
      setIntermediateLevelClass("levelbtn active")
      setAdvancedLevelClass("levelbtn")
      setLevelFilter(["all", "intermediate"])
    }
    if (button === "advanced") {
      setAllLevelsClass("levelbtn")
      setBeginnerLevelClass("levelbtn")
      setIntermediateLevelClass("levelbtn")
      setAdvancedLevelClass("levelbtn active")
      setLevelFilter(["all", "advanced"])
    }
  }

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
          <div className="flex flex-row items-center justify-center">
            <button
              id="all"
              className={
                allLevelsClass +
                " text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
              }
              onClick={() => levelButtonClicked("all")}
            >
              All levels
            </button>
            <button
              className={
                beginnerLevelClass +
                " text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
              }
              onClick={() => levelButtonClicked("beginner")}
            >
              Beginner
            </button>
            <button
              className={
                intermediateLevelClass +
                " text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
              }
              onClick={() => levelButtonClicked("intermediate")}
            >
              Intermediate
            </button>
            <button
              className={
                advancedLevelClass +
                " text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
              }
              onClick={() => levelButtonClicked("advanced")}
            >
              Advanced
            </button>
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
