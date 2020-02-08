import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type TagVariant =
  | 'black'
  | 'dark'
  | 'light'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'white'
  | 'danger'

type TagSize = 'normal' | 'medium' | 'large'

type TagModifier = 'link' | 'delete'

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Helpers {
  /**
   * While the default size is the normal one, the normal modifier exists in case you need to reset the tag to its normal size
   */
  readonly size?: TagSize
  /**
   * To style the tag element by appending color(variant)
   */
  readonly variant?: TagVariant
  /**
   * To make a link Tag or to turn the tag into a delete button.
   */
  readonly modifier?: TagModifier
  readonly rounded?: boolean
}

export const Tag: React.FC<TagProps> = ({
  size,
  variant,
  modifier,
  children,
  rounded,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tag', {
    [`is-${size}`]: size,
    [`is-${modifier}`]: modifier,
    [`is-${variant}`]: variant,
    [`is-rounded`]: rounded,
  })

  return (
    <El as="span" {...props} className={classes}>
      {children}
    </El>
  )
}
