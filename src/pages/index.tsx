import React, { ReactElement } from "react"
import NavBar from "../components/navbar"
import Hero from "../components/hero"
import Conferences from "../components/conferences"
import Communities from "../components/communities"
import Sponsors from "../components/sponsors"
import Organisers from "../components/organisers"

function Index(): ReactElement {
  return (
    <>
      <div id="top" className="font-sans">
        <NavBar></NavBar>
        <Hero></Hero>
        <Conferences></Conferences>
        <Communities></Communities>
        <Sponsors></Sponsors>
        <Organisers></Organisers>
      </div>
    </>
  )
}

export default Index
