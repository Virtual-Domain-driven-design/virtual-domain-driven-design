import React, { ReactElement, useState } from "react"
import NavBar from "../components/navbar"
import Hero from "../components/hero"

function Index(): ReactElement {
  return (
    <>
      <div id="top" className="font-sans">
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </>
  )
}

export default Index
