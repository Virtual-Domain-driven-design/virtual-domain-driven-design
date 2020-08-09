import React, { ReactElement } from "react"
import { Link } from "gatsby"

const BlueButton = ({ to, href, label }): ReactElement => {
  const className =
    "rounded-lg border-2 p-4 bg-blue-500 floating-action-button text-white"
  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }
  if (to) {
    return (
      <Link className={className} to={to}>
        {label}
      </Link>
    )
  }
}

export default BlueButton
