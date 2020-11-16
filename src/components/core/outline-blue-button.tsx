import { Link } from "gatsby"
import React, { FC } from "react"
import tw from "twin.macro"

interface OutlineBlueButtonProps {
  to?: string
  href?: string
}

const OutlineBlueButton: FC<OutlineBlueButtonProps> = ({
  children,
  to,
  href,
}) => {
  const style = tw`bg-transparent hover:bg-blue-500 text-center text-xs lg:text-base text-white font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded`
  if (href) {
    return (
      <a
        role="button"
        css={style}
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
      <Link css={style} to={to}>
        {children}
      </Link>
    )
  }

  return null
}

export default OutlineBlueButton
