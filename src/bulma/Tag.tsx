import * as React from 'react'
import classNames from 'classnames'

type TagColor =
  | 'black'
  | 'dark'
  | 'light'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'

type TagSize = 'normal' | 'medium' | 'large'

type TagModifier = 'rounded' | 'delete'

interface TagProps {
  readonly size?: TagSize
  readonly color?: TagColor
  readonly modifier?: TagModifier
  readonly children: React.ReactNode
}

export const Tag: React.SFC<TagProps> = ({
  size,
  color,
  modifier,
  children,
}) => {
  const classes: string = classNames('tag', {
    [`is-${size}`]: size,
    [`is-${modifier}`]: modifier,
    [`is-${color}`]: color,
  })
  return <span className={classes}>{children}</span>
}
