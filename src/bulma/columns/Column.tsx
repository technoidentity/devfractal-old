import React from 'react'

import classNames from 'classnames'

import { removeHelpers, helpersClasses, Helpers } from '../modifiers'

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

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
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
  size,
  gridSize,
  offsetSize,
  narrow,
  responsive,
  className,
  children,
  ...props
}) => {
  const classes: string = classNames(
    'column',
    getSizeResponsive(size, responsive),
    {
      [`is-${size}`]: size,
      [`is-${gridSize}`]: gridSize,
      [`is-offset-${offsetSize}`]: offsetSize,
      [`is-narrow`]: narrow,
    },
    helpersClasses(props),
    className,
  )

  return (
    <div {...removeHelpers(props)} className={classes}>
      {children}
    </div>
  )
}
