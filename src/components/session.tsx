import React, { ReactElement } from "react"

const Session = ({ session }): ReactElement => {
  return (
    <div className="session bg-white w-64 rounded-lg shadow-md p-2 m-2 flex flex-col">
      <div className="text-sm text-gray-600">{session.date}</div>
      <div className="videoframe">
        <iframe
          title={session.title}
          className="videostream"
          allowFullScreen={true}
          src={session.video}
          scrolling="no"
          frameBorder={0}
        ></iframe>
      </div>
      <a
        className="text-sm text-left font-bold link"
        href={session.video}
        target="_blank"
        rel="noopener noreferrer"
      >
        {session.title}
      </a>
      <div className="px-1 w-full flex flex-row flex-wrap">
        <div className="flex-shrink-0 leading-none text-xs tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {session.level}
        </div>
        {session.tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
            >
              {tag}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Session
