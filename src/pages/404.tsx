import React from "react"
import "twin.macro"

import Layout from "../templates/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div tw="flex flex-col items-center" id="404">
        <div tw="w-3/5">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
