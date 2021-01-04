import React, { FC } from "react"
import "twin.macro"

import Layout from "../templates/layout"

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <div tw="flex flex-col items-center" id="404">
        <div tw="prose prose-sm sm:prose lg:prose-lg xl:prose-lg lg:w-2/3">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
