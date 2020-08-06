/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Layout from "./layout"

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <div className="section" id="codeofconduct">
        <div className="content w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3">
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default PageLayout
