import React from "react"
import "twin.macro"

type UpcomingSessionBlockProps = {
  description: string
}

const UpcomingSessionBlock = (
  upcomingsessionBlockProps: UpcomingSessionBlockProps
) => {
  return (
    <div tw="flex xl:flex-row flex-col items-center w-2/3 m-4">
      <div tw="w-full m-4">
        <div tw="text-center justify-center rounded-lg shadow-md p-2">
          {upcomingsessionBlockProps.description}
        </div>
      </div>
    </div>
  )
}

export default UpcomingSessionBlock
