import React, { ChangeEventHandler } from "react"
import * as JsSearch from "js-search"
import "twin.macro"

export type SearchOptions = {
  indexStrategy: string
  searchSanitizer: string
  TitleIndex: boolean
  DescriptionIndex: boolean
  TagIndex: boolean
  SearchByTerm: boolean
  removeStopWords?: boolean
}

export const defaultOptions: SearchOptions = {
  indexStrategy: "Prefix match",
  searchSanitizer: "Lower Case",
  TitleIndex: true,
  DescriptionIndex: true,
  TagIndex: true,
  SearchByTerm: true,
}

type Searchable = {
  id: string
  title: string
  description: string
  tags: string[]
}

export const rebuildIndex = (
  options: SearchOptions,
  content: Searchable[]
): { search: JsSearch.Search; isLoading: boolean } => {
  const {
    indexStrategy,
    searchSanitizer,
    removeStopWords,
    SearchByTerm,
    TitleIndex,
    DescriptionIndex,
    TagIndex,
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
  if (indexStrategy === "All") {
    dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
  }
  if (indexStrategy === "Exact match") {
    dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy()
  }
  if (indexStrategy === "Prefix match") {
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
  }

  /**
   * defines the sanitizer for the search
   * to prevent some of the words from being excluded
   */
  searchSanitizer === "Case Sensitive"
    ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
    : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer())
  SearchByTerm
    ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id"))
    : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())

  if (TitleIndex) {
    dataToSearch.addIndex("title")
  }
  if (DescriptionIndex) {
    dataToSearch.addIndex("description")
  }
  if (TagIndex) {
    dataToSearch.addIndex("tags")
  }

  dataToSearch.addDocuments(content) // adds the data to be searched

  return { search: dataToSearch, isLoading: false }
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()

const Search = (props: {
  value: string
  label?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>{props.label || "Search"}</label>
      <input
        tw="lg:w-64 sm:w-56 text-xs m-2 p-2 rounded-lg border border-blue-500 hover:border-blue-400"
        id="Search"
        aria-label="Search"
        value={props.value}
        onChange={props.onChange}
        placeholder="start typing or click on tag"
      />
    </form>
  </div>
)

export default Search
