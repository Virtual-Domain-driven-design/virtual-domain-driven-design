import React, { FC } from "react"
import { Link } from "gatsby"

interface BlueButtonProps {
  to?: string
  href?: string
}

const BlueButton: FC<BlueButtonProps> = ({ children, to, href }) => {
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
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }

  return null
}

export default BlueButton
