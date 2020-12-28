import React, { FC } from "react"
import "twin.macro"

interface FloatingActionCardProps {
  key: string
  href: string
}

const FloatingActionCard: FC<FloatingActionCardProps> = ({
  children,
  key,
  href,
  ...props
}) => {
  return (
    <a
      key={key}
      tw="flex justify-center "
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div tw="bg-white w-full sm:w-64 shadow-md rounded-lg m-4 flex flex-col items-center justify-between transform scale-100 duration-100 hover:scale-110">
        {children}
      </div>
    </a>
  )
}

export default FloatingActionCard
