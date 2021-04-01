import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { FC } from "react"

const SlackLinkedButton: FC = () => {
  const data = useStaticQuery(graphql`
    {
      slackLogo: file(relativePath: { eq: "logo/slack_icon.png" }) {
        childImageSharp {
          gatsbyImageData(height: 24, width: 24, layout: FIXED)
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
      <GatsbyImage
        image={data.slackLogo.childImageSharp.gatsbyImageData}
        tw="mr-2 h-8"
        alt="Slack"
      />
      Slack
    </a>
  )
}

export default SlackLinkedButton
