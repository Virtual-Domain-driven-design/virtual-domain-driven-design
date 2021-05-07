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
            <SessionSearch sessions={allSessions} engine={options} />
        </div>
    </Layout>
  )
}

export default SearchLayout
