// @ts-ignore
import NoUpcomingImg from "../images/no_upcoming.svg"
import ThreeDBlueButton from "../components/three-d-blue-button"
import React from "react"

const NoUpcoming = () => (
  <div tw="my-8 w-4/5 lg:w-2/3 xl:w-1/2">
    <h2 tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 text-blue-800 text-3xl">
      No upcoming sessions finalized yet
    </h2>
    <div tw="flex flex-col items-center justify-center">
      <ThreeDBlueButton href="https://feedback.userreport.com/a15e4e61-2323-40a1-90b4-1267e010e35c/">
        Propose a session
      </ThreeDBlueButton>
    </div>
    <div tw="flex flex-col items-center justify-start">
      <NoUpcomingImg tw="h-64 mb-6" />
    </div>
  </div>
)

export default NoUpcoming
