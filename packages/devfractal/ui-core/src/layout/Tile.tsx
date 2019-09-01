import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

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

export interface TileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly tileType?: TileType

  /**
   * To resize any tile according to 12 column grid
   */
  readonly size?: TileSize
  /**
   * To stack tiles vertically
   */
  readonly vertical?: boolean

  readonly variant?: TileVariant
  readonly notification?: boolean
  readonly box?: boolean
}

export const Tile: React.FC<TileProps> = ({
  tileType,
  children,
  size,
  vertical,
  variant,
  notification,
  box,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tile', {
    [`is-${tileType}`]: tileType,
    [`is-${size}`]: size,
    'is-vertical': vertical,
    [`is-${variant}`]: variant,
    notification,
    box,
  })
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
