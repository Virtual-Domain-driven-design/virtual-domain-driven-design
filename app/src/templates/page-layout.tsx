import React, { FC } from "react"
import "twin.macro"

import Layout from "./layout"

const PageLayout: FC = ({ children }) => {
  return (
    <Layout>
      <div tw="flex flex-col items-center" id="codeofconduct">
        <div tw="prose prose-sm sm:prose lg:prose-lg xl:prose-lg lg:w-2/3">
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default PageLayout
