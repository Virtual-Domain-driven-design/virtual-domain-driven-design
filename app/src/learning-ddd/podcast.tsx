import * as React from "react"
import tw from "twin.macro"

export type PodcastContent = {
  title: string
  level: string
  podcast: string
  tags: string[]
}

type PodcastProps = {
  session: PodcastContent
}

const Podcast = ({ session }: PodcastProps) => {
  return (
    <div tw="bg-white w-96 h-56 rounded-lg shadow-md p-2 m-2">
      <div
        css={[
          { "padding-bottom": "42.86%" },
          tw`relative block overflow-hidden`,
        ]}
      >
        <iframe
          title={session.title}
          css={[
            { border: 0 },
            tw`absolute top-0 left-0 bottom-0 h-full w-full`,
          ]}
          allowFullScreen={true}
          src={session.podcast}
          scrolling="no"
          frameBorder={0}
        />
      </div>
      <div tw="m-2 text-sm text-left font-bold text-blue-600">
        {session.title}
      </div>
    </div>
  )
}

export default Podcast
