import React from "react"
import tw from "twin.macro"

type VideoEmbedProps = {
  title: string
  video: string
}

const VideoEmbed = (videoEmbedProps: VideoEmbedProps) => {
  return (
    <div css={[{ paddingTop: "56.25%" }, tw`relative`]}>
      <iframe
        title={videoEmbedProps.title}
        tw="absolute top-0 left-0 w-full h-full"
        allowFullScreen={true}
        src={videoEmbedProps.video}
        scrolling="no"
        frameBorder={0}
      ></iframe>
    </div>
  )
}

export default VideoEmbed
