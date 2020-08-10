import React, { ReactElement } from "react"
import Img from "gatsby-image"

import { Link } from "gatsby"

const DDDCrew = ({ repo }): ReactElement => {
  return (
    <Link
      className="ddd-crew group floating-action-button bg-white w-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start"
      to={repo.to}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="m-2 h-8 font-semibold text-gray-800 text-sm text-center">
          {repo.name}
        </div>
        <Img
          fluid={repo.img.childImageSharp.fluid}
          className="my-2 w-64 h-32"
          imgStyle={{ objectFit: "contain" }}
        />
        <div className="text-gray-800 text-sm text-center">{repo.excerpt}</div>
      </div>
    </Link>
  )
}

export default DDDCrew
