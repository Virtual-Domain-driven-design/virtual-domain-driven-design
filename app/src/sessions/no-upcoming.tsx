// @ts-ignore
import NoUpcomingImg from "../images/no_upcoming.svg"
import ThreeDBlueButton from "../components/three-d-blue-button"
import React, { PropsWithChildren } from "react"

import "twin.macro"

const NoUpcoming = ({ children }: PropsWithChildren<{}>) => (
  <div tw="bg-gray-100 w-full space-y-2 rounded-lg shadow-md p-4 md:p-8 mb-2">
    <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
      Upcoming Session
    </h2>
    <div tw="flex flex-col items-start">
      <div tw="flex flex-row items-center space-x-4 bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2">
        <div>
          <NoUpcomingImg tw="w-24 h-auto object-scale-down" />
        </div>
        <div tw="font-bold">Working on upcoming sessions ...</div>
        <div tw="flex flex-col space-x-4 items-center justify-center">
          <ThreeDBlueButton href="https://feedback.userreport.com/a15e4e61-2323-40a1-90b4-1267e010e35c/">
            Propose a session
          </ThreeDBlueButton>
        </div>
      </div>
      <div tw="flex flex-col">
        <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
          Last Session
        </h2>
        {children}
      </div>
    </div>
  </div>
)

export default NoUpcoming
