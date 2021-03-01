import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { FC } from "react"

const SlackLinkedButton: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      slackLogo: file(relativePath: { eq: "logo/slack_icon.png" }) {
        childImageSharp {
          fixed(height: 24, width: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <a
      tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
      href="https://github.com/ddd-cqrs-es/slack-community"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img fixed={data.slackLogo.childImageSharp.fixed} tw="mr-2 h-8" />
      Slack
    </a>
  )
}

export default SlackLinkedButton
