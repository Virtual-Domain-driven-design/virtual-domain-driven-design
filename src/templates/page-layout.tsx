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
      <div className="flex flex-col items-center" id="codeofconduct">
        <div className="markdown w-3/5">{children}</div>
      </div>
    </Layout>
  )
}

export default PageLayout
