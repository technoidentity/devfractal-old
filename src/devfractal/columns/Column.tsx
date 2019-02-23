import React from 'react'
import { classNamesHelper, Div, Helpers } from '../internal'

type ColumnSize =
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'full'
  | 'four-fifths'
  | 'three-fifths'
  | 'two-fifths'
  | 'one-fifth'

type ColumnGridSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

type ColumnOffsetSize = ColumnSize | ColumnGridSize

type ColumnResponsive =
  | 'mobile'
  | 'desktop'
  | 'tablet'
  | 'widescreen'
  | 'fullhd'

const getSizeResponsive: (
  size?: ColumnSize,
  responsive?: ColumnResponsive,
) => string = (size, responsive) => {
  if (size === undefined) {
    return ''
  }
  if (responsive === undefined) {
    return `is-${size}`
  }
  return `is-${size}-${responsive}`
}

export interface ColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly size?: ColumnSize
  readonly gridSize?: ColumnGridSize
  readonly offsetSize?: ColumnOffsetSize
  readonly narrow?: boolean
  readonly responsive?: ColumnResponsive
}

export const Column: React.SFC<ColumnProps> = ({
  size,
  gridSize,
  offsetSize,
  narrow,
  responsive,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(
    props,
    'column',
    getSizeResponsive(size, responsive),
    {
      [`is-${size}`]: size,
      [`is-${gridSize}`]: gridSize,
      [`is-offset-${offsetSize}`]: offsetSize,
      'is-narrow': narrow,
    },
  )

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
