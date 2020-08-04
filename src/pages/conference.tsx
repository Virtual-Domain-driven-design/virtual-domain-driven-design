import React, { ReactElement } from "react"
import NavBar from "../components/navbar"

function Conference(): ReactElement {
  return (
    <>
      <div id="top" className="font-sans">
        <NavBar></NavBar>
      </div>
    </>
  )
}

export default Conference
