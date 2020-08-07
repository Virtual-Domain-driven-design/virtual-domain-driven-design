/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

import NavBar from "../components/navbar"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  return (
    <>
      <div id="top" className="font-sans">
        <SEO></SEO>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
