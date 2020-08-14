import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"

import BlueButton from "./blue-button"

interface ContentGalleryProps {
  filteredOffSet: number
  itemsLenght: number
  pageLimit: number
  setOffset: Function
  title: string
  allTo: string
}

const ContentGallery: FC<ContentGalleryProps> = ({
  children,
  filteredOffSet,
  itemsLenght,
  pageLimit,
  setOffset,
  title,
  allTo,
}) => {
  const leftVisible = filteredOffSet > 0
  const rightVisible = itemsLenght > filteredOffSet + pageLimit
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 font-bold text-2xl lg:w-2/3 xl:w-1/2">{title}</h2>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet - pageLimit)}
            className={[
              leftVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size="4x" />
          </button>
        </div>
        {children}
        <div className="flex justify-center items-center w-1/20">
          <button
            onClick={() => setOffset(filteredOffSet + pageLimit)}
            className={[
              rightVisible ? "" : "invisible",
              "transition duration-500 text-blue-700 hover:text-blue-400",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="4x" />
          </button>
        </div>
      </div>

      <BlueButton to={allTo}>All {title}</BlueButton>
    </div>
  )
}

export default ContentGallery
