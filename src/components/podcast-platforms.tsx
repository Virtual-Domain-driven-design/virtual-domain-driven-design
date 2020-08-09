import React, { ReactElement } from "react"
import Img from "gatsby-image"

const PodcastPlatforms = ({ platform }): ReactElement => {
  return (
    <a
      key={platform.name}
      className="floating-action-button rounded-full"
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img fluid={platform.img.childImageSharp.fluid} className="h-10 w-10" />
    </a>
  )
}

export default PodcastPlatforms
