import { Link } from "gatsby"
import * as React from "react"
import tw from "twin.macro"

interface OutlineBlueButtonProps {
  to?: string
  href?: string
  children: any
}

const OutlineBlueButton = ({
  children,
  to,
  href,
  ...props
}: OutlineBlueButtonProps) => {
  const style = tw`bg-transparent hover:bg-blue-500 text-center text-xs lg:text-base text-white font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded`
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
      // @ts-ignore
      <Link css={style} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return null
}

export default OutlineBlueButton
