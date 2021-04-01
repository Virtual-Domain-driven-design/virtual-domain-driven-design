import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"

interface FloatingActionCardProps {
  id: string
  href?: string
  to?: string
  children: any
}

const FloatingActionCard = ({
  children,
  id,
  href,
  to,
  ...props
}: FloatingActionCardProps) => {
  const style = [
    tw`bg-white w-full sm:w-64 shadow-md rounded-lg m-4 flex flex-col items-center justify-between transform scale-100 duration-100 hover:scale-110`,
  ]
  if (href) {
    return (
      <a
        key={id}
        tw="flex justify-center "
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div css={style}>{children}</div>
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

export default FloatingActionCard
