import React from 'react'

import classNames from 'classnames'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type TileType = 'ancestor' | 'parent' | 'child'

type TileVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type TileSize =
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

interface TileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly tileType?: TileType
  readonly size?: TileSize
  readonly vertical?: boolean
  readonly variant?: TileVariant
  readonly notification?: boolean
  readonly box?: boolean
}

export const Tile: React.SFC<TileProps> = ({
  tileType,
  children,
  size,
  vertical,
  variant,
  notification,
  box,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'tile',
    {
      [`is-${tileType}`]: tileType,
      [`is-${size}`]: size,
      [`is-vertical`]: vertical,
      [`is-${variant}`]: variant,
      [`notification`]: notification,
      [`box`]: box,
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
