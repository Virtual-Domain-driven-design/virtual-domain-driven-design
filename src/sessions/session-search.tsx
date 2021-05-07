import React, { useState } from "react"
import * as JsSearch from "js-search"
import "twin.macro"
import Session, { SessionContent } from "./session"
import Search, { defaultOptions, rebuildIndex, SearchOptions } from "../components/search"

type SearchResults = {
  searchQuery: string
  searchResults?: [SessionContent]
}
const initialState: SearchResults = {
  searchQuery: "",
  searchResults: undefined
}

type SessionSearchProps = {
  sessions: [SessionContent],
  engine?: SearchOptions
}

let search:JsSearch.Search

const SessionSearch = (props:SessionSearchProps) => {
  const options = {...props.engine, ...defaultOptions}
  const [searchStatus, updateSearchStatus] = useState<SearchResults>(initialState)
  const { searchResults, searchQuery } = searchStatus
  const searchMethod = search || rebuildIndex(options, props.sessions).search

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  const searchData = (newQuery:string) => {
    const queryResult = searchMethod.search(newQuery) as [SessionContent]
    updateSearchStatus({searchQuery: newQuery, searchResults: queryResult })
  }

  const queryResults = searchQuery === "" ?props.sessions : searchResults

  return (
    <div tw="w-full flex flex-col items-center justify-start">
      <Search value={searchQuery} onChange={e => searchData(e.target.value)} label="Search in sessions"/>
      <div tw="w-11/12 md:w-5/6">
        <div tw="flex flex-wrap justify-center" data-testid="Sessions">
          {queryResults && queryResults.map((sessionDetails) => {
            return <Session key={sessionDetails.id} session={sessionDetails}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default SessionSearch
