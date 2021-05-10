import React, { useState } from "react"
import * as JsSearch from "js-search"
import tw from "twin.macro"
import Session, { SessionContent } from "./session"
import Search, {
  defaultOptions,
  rebuildIndex,
  SearchOptions,
} from "../components/search"

const initialLengthSize = 10

type SearchResults = {
  searchQuery: string
  searchResults?: SessionContent[]
}
const initialState: SearchResults = {
  searchQuery: "",
  searchResults: undefined,
}

type SessionSearchProps = {
  sessions: SessionContent[]
  engine?: SearchOptions,
  showItems?: number
}

let search: JsSearch.Search

const SessionSearch = ({ engine, sessions, showItems=initialLengthSize }: SessionSearchProps) => {
  const [sessionsLength, setSessionsLength] = useState(showItems)
  const options = { ...(engine), ...defaultOptions }
  const [searchStatus, updateSearchStatus] = useState<SearchResults>(
    initialState,
  )
  const { searchResults, searchQuery } = searchStatus
  const searchMethod = search || rebuildIndex(options, sessions).search

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  const searchData = (newQuery: string) => {
    const queryResult = searchMethod.search(newQuery) as SessionContent[]
    updateSearchStatus({ searchQuery: newQuery, searchResults: queryResult })
  }

  const queryResults = searchQuery === "" ? sessions : searchResults
  const resultsToShow = queryResults?.slice(0, sessionsLength) || []
  const offerPaging = sessionsLength < queryResults.length
  return (
    <div tw="w-full flex flex-col items-center justify-start">
      <div tw="flex items-start w-6/12 md:w-3/6">
        <Search
          value={searchQuery}
          onChange={(e) => searchData(e.target.value)}
          label="Search in sessions"
        />
      </div>
      <div tw="w-11/12 md:w-5/6">
        <div tw="flex flex-wrap justify-center" data-testid="Sessions">
          {resultsToShow.map((sessionDetails) => {
            return (
              <Session key={sessionDetails.id} session={sessionDetails}/>
            )
          })}
        </div>
      </div>
      <button
        data-testid={offerPaging ? "More" : "All"}
        onClick={() => setSessionsLength(sessionsLength + showItems)}
        tw="my-4 bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded"
        css={!offerPaging && tw`invisible`}
      >
        Load more
      </button>
    </div>
  )
}

export default SessionSearch
