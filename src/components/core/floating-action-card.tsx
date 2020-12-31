import { Link } from "gatsby"
import React, { FC } from "react"
import tw from "twin.macro"

interface FloatingActionCardProps {
  key: string
  href?: string
  to?: string
}

const FloatingActionCard: FC<FloatingActionCardProps> = ({
  children,
  key,
  href,
  to,
  ...props
}) => {
  const style = [
    tw`bg-white w-full sm:w-64 shadow-md rounded-lg m-4 flex flex-col items-center justify-between transform scale-100 duration-100 hover:scale-110`,
  ]
  if (href) {
    return (
      <a
        key={key}
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
      <Link css={style} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return null
}

export default FloatingActionCard
