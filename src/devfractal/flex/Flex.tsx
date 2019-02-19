import React from 'react'

type Display = 'flex' | 'inline-flex'

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch'

interface FlexProps {
  readonly display?: Display
  readonly flexDirection?: FlexDirection
  readonly flexWrap?: FlexWrap
  readonly justifyContent?: JustifyContent
  readonly alignItems?: AlignItems
  readonly alignContent?: AlignContent
}

export const Flex: React.SFC<FlexProps> = ({
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  children,
}) => {
  return (
    <div
      style={{
        display,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
      }}
    >
      {children}
    </div>
  )
}
