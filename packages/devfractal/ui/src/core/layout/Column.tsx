import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

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
  /**
   * Defines the size of each column individually
   */
  readonly size?: ColumnSize
  /**
   * To resize  according to 12 column grid
   */
  readonly gridSize?: ColumnGridSize
  /**
   * To create horizontal space around column elements
   */
  readonly offsetSize?: ColumnOffsetSize
  /**
   * If you want a column to only take the space it needs. The other column(s) will fill up the remaining space.
   */
  readonly narrow?: boolean
  /**
   *Display column based on each viewport size
   */
  readonly responsive?: ColumnResponsive
}

export const Column: React.FC<ColumnProps> = ({
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
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
