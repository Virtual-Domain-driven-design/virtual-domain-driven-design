import React, { ReactElement } from "react"
import NavBar from "../components/navbar"
import Hero from "../components/hero"
import Conferences from "../components/conferences"
import Communities from "../components/communities"

function Index(): ReactElement {
  return (
    <>
      <div id="top" className="font-sans">
        <NavBar></NavBar>
        <Hero></Hero>
        <Conferences></Conferences>
        <Communities></Communities>
      </div>
    </>
  )
}

export default Index
