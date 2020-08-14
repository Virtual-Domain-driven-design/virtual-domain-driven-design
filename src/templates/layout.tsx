import React, { FC } from "react"

import Footer from "../components/footer"
import NavBar from "../components/navbar"
import SEO from "../components/seo"

const Layout: FC = ({ children }) => {
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
