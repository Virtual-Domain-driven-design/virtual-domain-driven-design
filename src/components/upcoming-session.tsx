import React, { ReactElement } from "react"

const UpcomingSession = ({ index, session }): ReactElement => {
  return (
    <div
      key={index}
      className="bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2"
    >
      <div className="font-bold">{session.title}</div>
      <div className="text-sm text-gray-600">
        {session.date} - {session.time}
      </div>
      <img className="w-full" alt="" src={session.img}></img>
      <div className="py-2 text-justify">{session.description}</div>
      <div className="mt-4 pt-2 border-t border-solid flex items-center justify-start flex-wrap">
        {session.links.map((link, index) => {
          return (
            <a
              key={index}
              className="bg-gray-200 floating-action-button p-2 m-2"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default UpcomingSession
