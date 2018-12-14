import * as React from 'react'

import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from './commonHelpers'

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

interface ColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly size?: ColumnSize
  readonly gridSize?: ColumnGridSize
  readonly offsetSize?: ColumnOffsetSize
  readonly narrow?: boolean
  readonly responsive?: ColumnResponsive
}

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

export const Column: React.SFC<ColumnProps> = ({
  children,
  size,
  gridSize,
  offsetSize,
  narrow,
  responsive,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const sizeResponsive: string = getSizeResponsive(size, responsive)

  const classes: string = classNames(
    'column',
    sizeResponsive,
    {
      [`is-${size}`]: size,
      [`is-${gridSize}`]: gridSize,
      [`is-offset-${offsetSize}`]: offsetSize,
      [`is-narrow`]: narrow,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
