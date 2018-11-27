import * as React from 'react'

import classNames from 'classnames'

type TileModifier = 'ancestor' | 'parent' | 'child'

type TileColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

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

interface TileProps {
  readonly children: React.ReactNode
  readonly modifier?: TileModifier
  readonly size?: TileSize
  readonly vertical?: boolean
  readonly color?: TileColor
  readonly notification?: boolean
}

export const Tile: React.SFC<TileProps> = ({
  modifier,
  children,
  size,
  vertical,
  color,
  notification,
}) => {
  const classes: string = classNames('tile', {
    [`is-${modifier}`]: modifier,
    [`is-${size}`]: size,
    [`is-vertical`]: vertical,
    [`is-${color}`]: color,
    [`notification`]: notification,
  })
  return <article className={classes}>{children}</article>
}
