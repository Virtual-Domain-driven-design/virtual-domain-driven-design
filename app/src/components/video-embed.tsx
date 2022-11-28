import React from "react"
import tw from "twin.macro"
import "styled-components/macro"

type VideoEmbedProps = {
  title: string
  video: string
}

//Note: the video-link equals '-', the default value used here for building gatsby pages
const VideoEmbed = (videoEmbedProps: VideoEmbedProps) => {
  return videoEmbedProps?.video?.length > 5 ? (
    <div css={[{ paddingTop: "56.25%" }, tw`relative`]}>
      <div tw="text-center m-1">Video</div>
      <iframe
        title={videoEmbedProps.title}
        tw="absolute top-0 left-0 w-full h-full"
        allowFullScreen={true}
        src={videoEmbedProps.video}
        scrolling="no"
        frameBorder={0}
      ></iframe>
    </div>
  ):(<div css={[{ paddingTop: "10%", paddingBottom:"10%" }, tw`relative`]}><h2 tw="text-center">Ephemeral Session (no recording)</h2></div>)
}

export default VideoEmbed
