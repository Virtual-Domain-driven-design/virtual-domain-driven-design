import React, { useState } from "react"
import * as JsSearch from "js-search"
import "twin.macro"
import Session, { SessionContent } from "./session"

//Todo merge searchOption and searchDetails, remove isLoading
//Extract the search module and the state handling
export type SearchOptions = {
  indexStrategy: string,
  searchSanitizer: string,
  TitleIndex: boolean,
  DescriptionIndex: boolean,
  SearchByTerm: boolean,
  RemoveStopWords?: boolean
}

type StateProps = {
  isLoading: boolean
  search?: JsSearch.Search
  searchQuery: string
  searchResults?: [SessionContent]
}

type SearchDetails = {
  selectedStrategy: string
  selectedSanitizer: string
  removeStopWords: boolean
  termFrequency: boolean
  indexByTitle:boolean
  indexByDescription: boolean
}

const initialState = {
  isLoading: true,
  search: undefined,
  searchQuery: "",
  searchResults: undefined,
  selectedStrategy: "",
  selectedSanitizer: "",
  removeStopWords: false,
  termFrequency: true,
  indexByTitle:false,
  indexByDescription: false
}

type SessionSearchProps = {
  sessions: [SessionContent],
  engine: SearchOptions
}
const rebuildIndex = (options:SearchDetails, content:[SessionContent]):{search:JsSearch.Search, isLoading:boolean} => {
  const {
    selectedStrategy,
    selectedSanitizer,
    removeStopWords,
    termFrequency,
    indexByTitle,
    indexByDescription
  } = options
  const dataToSearch = new JsSearch.Search("id")

  if (removeStopWords) {
    dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
      dataToSearch.tokenizer
    )
  }
  /**
   * defines an indexing strategy for the data
   * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
   */
  if (selectedStrategy === "All") {
    dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
  }
  if (selectedStrategy === "Exact match") {
    dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy()
  }
  if (selectedStrategy === "Prefix match") {
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
  }

  /**
   * defines the sanitizer for the search
   * to prevent some of the words from being excluded
   */
  selectedSanitizer === "Case Sensitive"
    ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
    : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer())
  termFrequency
    ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id"))
    : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())

  // sets the index attribute for the data
  if (indexByTitle) {
    dataToSearch.addIndex("title")
  }
  // sets the index attribute for the data
  if (indexByDescription) {
    dataToSearch.addIndex("description")
  }

  dataToSearch.addDocuments(content) // adds the data to be searched

  return { search: dataToSearch, isLoading: false }
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()


const SessionSearch = ({ sessions, engine }:SessionSearchProps) => {
  console.log({ engine })
  const [currentState, setStateProps] = useState<StateProps&SearchDetails>(initialState)
  const { searchResults, searchQuery, search } = currentState
  if(!search) {
    const newSearch = {
      indexByTitle: engine.TitleIndex,
      indexByDescription: engine.DescriptionIndex,
      termFrequency: engine.SearchByTerm,
      selectedSanitizer: engine.searchSanitizer,
      selectedStrategy: engine.indexStrategy,
      removeStopWords: !!engine.RemoveStopWords
    }
    const newIndex = rebuildIndex(newSearch, sessions)
    setStateProps({...currentState,...newSearch, ...newIndex})
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  const searchData = (e: { target: { value: string } }) => {
    const queryResult = currentState.search.search(e.target.value)
    setStateProps({...currentState, searchQuery: e.target.value, searchResults: queryResult })
  }

  const queryResults = searchQuery === "" ? sessions : searchResults

  return (
    <div tw="w-full flex flex-col items-center justify-start">
      <div tw=" flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>

        <input
          tw="lg:text-base md:text-sm sm:text-xs m-2 p-2 rounded-lg border-2 border-blue-500 hover:border-blue-400"
          id="Search"
          value={searchQuery}
          onChange={searchData}
          placeholder="Enter your search here"
        />
      </form>
      </div>
      <div tw="w-11/12 md:w-5/6">
        <div tw="flex flex-wrap justify-center">
          {queryResults && queryResults.map((sessionDetails) => {
            return <Session key={sessionDetails.id} session={sessionDetails} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SessionSearch
