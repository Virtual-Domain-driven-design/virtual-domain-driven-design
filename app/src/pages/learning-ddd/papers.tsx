import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"
import tw from "twin.macro"
import 'styled-components/macro'

import Paper, { PaperContent } from "../../learning-ddd/paper"
import Layout from "../../templates/layout"
import SEO from "../../components/seo"

const initialLengthSize = 24

const Papers: FC = () => {
  const [papersLength, setPapersLength] = useState(initialLengthSize)

  const allPapers = useStaticQuery<{
    allContentYaml: { nodes: { papers: PaperContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { papers: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          papers {
            authors
            title
            year
            link
            excerpt
            level
            tags
          }
        }
      }
    }
  `).allContentYaml.nodes[0].papers

  const areAllPapersVisible = papersLength > allPapers.length

  const papers = allPapers.slice(0, papersLength)

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design papers"
        description="A curated list of Domain-Driven Design and Software Architecture related papers"
      />
      <div tw="w-full flex flex-col items-center justify-start">
        <h2 tw="my-6 w-4/5 lg:w-2/3 xl:w-1/2">Papers</h2>
        <div tw="w-11/12 md:w-5/6">
          <div tw="flex items-stretch justify-center flex-wrap">
            {papers.map((paper) => {
              return <Paper key={paper.title} paper={paper} />
            })}
          </div>
        </div>
        <button
          onClick={() => setPapersLength(papersLength + initialLengthSize)}
          tw="my-4 bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded"
          css={areAllPapersVisible && tw`invisible`}
        >
          Load more
        </button>
      </div>
    </Layout>
  )
}

export default Papers
