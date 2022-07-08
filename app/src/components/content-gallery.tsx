import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import tw from "twin.macro"
import "styled-components/macro"

import ThreeDBlueButton from "./three-d-blue-button"

interface ContentGalleryProps {
  children: any
  filteredOffSet: number
  itemsLength: number
  pageLimit: number
  setOffset: Function
  title: string
  allTo: string
}

const ContentGallery = ({
  children,
  filteredOffSet,
  itemsLength,
  pageLimit,
  setOffset,
  title,
  allTo,
}: ContentGalleryProps) => {
  const leftVisible = filteredOffSet > 0
  const rightVisible = itemsLength > filteredOffSet + pageLimit
  const all = `All ${title}`
  return (
    <div tw="w-full flex flex-col items-center my-2">
      <h2 tw="my-6 font-bold text-2xl w-2/3">{title}</h2>
      <div tw="flex flex-row justify-center w-5/6">
        <div tw="flex justify-center items-center">
          <button
            onClick={() => setOffset(filteredOffSet - pageLimit)}
            tw="transition duration-500 text-blue-700 hover:text-blue-400 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            css={!leftVisible && tw`invisible`}
          >
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </div>
        <div tw="flex items-stretch justify-center flex-wrap">{children}</div>
        <div tw="flex justify-center items-center">
          <button
            onClick={() => setOffset(filteredOffSet + pageLimit)}
            tw="transition duration-500 text-blue-700 hover:text-blue-400 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            css={!rightVisible && tw`invisible`}
          >
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              style={{ width: "100%", height: "100%" }}
            />
          </button>
        </div>
      </div>

      <ThreeDBlueButton to={allTo}>{all}</ThreeDBlueButton>
    </div>
  )
}

export default ContentGallery
