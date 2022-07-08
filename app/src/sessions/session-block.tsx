import * as React from "react"
import tw from "twin.macro"
import "styled-components/macro"

import { SessionLink } from "./upcoming-session"
import ThreeDBlueButton from "../components/three-d-blue-button"
import VideoEmbed from "./../components/video-embed"
import ParsedContent from "../components/link-parser"

type SessionBlockProps = {
  description: string
  title: string
  links?: SessionLink[]
  podcast?: string
  video: string
}

const SessionBlock = (sessionBlockProps: SessionBlockProps) => {
  return (
    <div tw="flex xl:flex-row flex-col items-center w-5/6 m-2">
      <div tw="xl:w-2/3 w-5/6 xl:p-8">
        <div tw="xl:w-4/5 shadow-xl rounded-xl p-4 break-words lg:text-base md:text-sm sm:text-xs ">
          <ParsedContent text={sessionBlockProps.description} />
        </div>
      </div>
      <div tw="flex flex-col xl:w-1/3 w-5/6 m-2 items-center space-y-2">
        <div tw="w-full rounded-lg shadow-md">
          <div tw="text-center m-1">Video</div>
          <VideoEmbed
            title={sessionBlockProps.title}
            video={sessionBlockProps.video}
          />
          {sessionBlockProps.links && (
            <div tw="m-4 sm:space-x-4 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-center justify-center">
              {sessionBlockProps.links.map((link) => {
                return (
                  <ThreeDBlueButton
                    tw="text-xs "
                    href={link.url}
                    key={link.label}
                  >
                    {link.label}
                  </ThreeDBlueButton>
                )
              })}
            </div>
          )}
        </div>
        {sessionBlockProps.podcast && (
          <div tw="bg-white w-full h-32 shadow-xl">
            <div tw="text-center m-1">Podcast</div>
            <div
              css={[
                { "padding-bottom": "42.86%" },
                tw`relative block overflow-hidden`,
              ]}
            >
              <iframe
                title={sessionBlockProps.title}
                css={[
                  { border: 0 },
                  tw`absolute top-0 left-0 bottom-0 h-full w-full`,
                ]}
                allowFullScreen={true}
                src={sessionBlockProps.podcast}
                scrolling="no"
                frameBorder={0}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SessionBlock
