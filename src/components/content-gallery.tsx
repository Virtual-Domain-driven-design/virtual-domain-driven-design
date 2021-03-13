import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import tw from "twin.macro"

import ThreeDBlueButton from "./three-d-blue-button"

interface ContentGalleryProps {
  filteredOffSet: number
  itemsLength: number
  pageLimit: number
  setOffset: Function
  title: string
  allTo: string
}

const ContentGallery: FC<ContentGalleryProps> = ({
  children,
  filteredOffSet,
  itemsLength,
  pageLimit,
  setOffset,
  title,
  allTo,
}) => {
  const leftVisible = filteredOffSet > 0
  const rightVisible = itemsLength > filteredOffSet + pageLimit
  return (
    <div tw="w-full flex flex-col items-center my-2">
      <h2 tw="my-6 font-bold text-2xl w-2/3">{title}</h2>
      <div tw="flex flex-row justify-center w-5/6">
        <div tw="flex justify-center items-center w-1/6">
          <button
            onClick={() => setOffset(filteredOffSet - pageLimit)}
            tw="transition duration-500 text-blue-700 hover:text-blue-400"
            css={!leftVisible && tw`invisible`}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size="4x" />
          </button>
        </div>
        <div tw="flex items-stretch justify-center flex-wrap">{children}</div>
        <div tw="flex justify-center items-center w-1/6">
          <button
            onClick={() => setOffset(filteredOffSet + pageLimit)}
            tw="transition duration-500 text-blue-700 hover:text-blue-400"
            css={!rightVisible && tw`invisible`}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="4x" />
          </button>
        </div>
      </div>

      <ThreeDBlueButton to={allTo}>All {title}</ThreeDBlueButton>
    </div>
  )
}

export default ContentGallery
