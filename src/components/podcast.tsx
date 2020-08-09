import React, { ReactElement } from "react"

const Podcast = ({ session }): ReactElement => {
  return (
    <div className="group bg-white w-64 rounded-lg shadow-md p-2 m-1">
      <div className="embed-responsive aspect-ratio-16/9">
        <iframe
          title={session.title}
          className="embed-responsive-item"
          allowFullScreen={true}
          src={session.podcast}
          scrolling="no"
          frameBorder={0}
        ></iframe>
      </div>
      <div className="text-sm text-left font-bold link">{session.title}</div>
    </div>
  )
}

export default Podcast
