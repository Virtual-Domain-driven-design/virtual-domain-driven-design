import React, { useState } from "react"
import tw from "twin.macro"
import "styled-components/macro"

type LevelFilterProps = {
  setLevelFilter: Function
}

type ButtonsActive = {
  isAllActive: boolean
  isBeginnerActive: boolean
  isIntermediateActive: boolean
  isAdvancedActive: boolean
}

export enum ContentLevel {
  All = "all",
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

export const allLevels = [...Object.values(ContentLevel)]

const LevelFilter = ({ setLevelFilter }: LevelFilterProps) => {
  const [areButtonsActive, setButtonsActive] = useState<ButtonsActive>({
    isAllActive: true,
    isBeginnerActive: false,
    isIntermediateActive: false,
    isAdvancedActive: false,
  })
  const levelButtonClicked = (contentLevel: ContentLevel) => {
    const buttonsActive: ButtonsActive = {
      isAllActive: false,
      isBeginnerActive: false,
      isIntermediateActive: false,
      isAdvancedActive: false,
    }
    switch (contentLevel) {
      case ContentLevel.Beginner: {
        setButtonsActive({ ...buttonsActive, isBeginnerActive: true })
        setLevelFilter([ContentLevel.All, contentLevel])
        break
      }
      case ContentLevel.Intermediate: {
        setButtonsActive({ ...buttonsActive, isIntermediateActive: true })
        setLevelFilter([ContentLevel.All, contentLevel])
        break
      }
      case ContentLevel.Advanced: {
        setButtonsActive({ ...buttonsActive, isAdvancedActive: true })
        setLevelFilter([ContentLevel.All, contentLevel])
        break
      }
      default: {
        setButtonsActive({ ...buttonsActive, isAllActive: true })
        setLevelFilter(allLevels)
      }
    }
  }

  return (
    <div tw="flex flex-row items-center justify-center">
      <button
        tw="lg:text-base md:text-sm sm:text-xs m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
        css={areButtonsActive.isAllActive && tw`bg-blue-700`}
        onClick={() => levelButtonClicked(ContentLevel.All)}
        data-testid={ContentLevel.All}
      >
        All levels
      </button>
      <button
        tw="lg:text-base md:text-sm sm:text-xs m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
        css={areButtonsActive.isBeginnerActive && tw`bg-blue-700`}
        onClick={() => levelButtonClicked(ContentLevel.Beginner)}
        data-testid={ContentLevel.Beginner}
      >
        Beginner
      </button>
      <button
        tw="lg:text-base md:text-sm sm:text-xs m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
        css={areButtonsActive.isIntermediateActive && tw`bg-blue-700`}
        onClick={() => levelButtonClicked(ContentLevel.Intermediate)}
        data-testid={ContentLevel.Intermediate}
      >
        Intermediate
      </button>
      <button
        tw="lg:text-base md:text-sm sm:text-xs m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
        css={areButtonsActive.isAdvancedActive && tw`bg-blue-700`}
        onClick={() => levelButtonClicked(ContentLevel.Advanced)}
        data-testid={ContentLevel.Advanced}
      >
        Advanced
      </button>
    </div>
  )
}

export default LevelFilter
