import { Link } from "gatsby"
import React, { FC } from "react"
import tw from "twin.macro"

interface ThreeDBlueButtonProps {
  to?: string
  href?: string
  css?: string
}

const ThreeDBlueButton: FC<ThreeDBlueButtonProps> = ({
  children,
  to,
  href,
  ...props
}) => {
  const style = [
    tw`bg-blue-500 hover:bg-blue-700 text-center text-xs lg:text-base text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-900 rounded`,
  ]
  if (href) {
    return (
      <a
        role="button"
        css={style}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link css={style} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return null
}

export default ThreeDBlueButton
