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

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  readonly size?: TagSize
  readonly color?: TagColor
  readonly modifier?: TagModifier
}

export const Tag: React.SFC<TagProps> = ({
  size,
  color,
  modifier,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(className, 'tag', {
    [`is-${size}`]: size,
    [`is-${modifier}`]: modifier,
    [`is-${color}`]: color,
  })
  return (
    <span {...props} className={classes}>
      {children}
    </span>
  )
}
