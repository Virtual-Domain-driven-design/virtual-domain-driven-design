import React, { ReactElement, useState } from "react"
import NavBar from "../components/navbar"
import Hero from "../components/hero"

interface Props {}

function Index({}: Props): ReactElement {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
    </>
  )
}

export default Index
