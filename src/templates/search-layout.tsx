import React from "react"
import "twin.macro"

import Layout from "./layout"
import SessionSearch, { SearchOptions } from "../sessions/session-search"
import { SessionContent } from "../sessions/session"

interface SearchProps {
  pageContext: {
    allSessions:[SessionContent],
    options?:SearchOptions
  }
}

const SearchLayout = ({pageContext}:SearchProps) => {
  const {allSessions, options} = pageContext
  return (
    <Layout>
        <div tw="bg-gray-100 flex flex-col items-center justify-center" id="Search">
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
            Search data using JS and Gatsby API
          </h1>
          <div>
            <SessionSearch sessions={allSessions} engine={options} />
          </div>
        </div>
    </Layout>
  )
}

export default SearchLayout
