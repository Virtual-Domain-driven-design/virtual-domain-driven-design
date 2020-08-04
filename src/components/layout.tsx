/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import NavBar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <div id="top" className="font-sans">
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
