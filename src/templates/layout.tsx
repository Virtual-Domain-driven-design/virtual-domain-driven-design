/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import NavBar from "../components/navbar"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <>
      <div id="top" className="font-sans">
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
