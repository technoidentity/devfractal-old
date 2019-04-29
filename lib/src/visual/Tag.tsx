import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

type TagVariant =
  | 'black'
  | 'dark'
  | 'light'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'white'
  | 'danger'

type TagSize = 'normal' | 'medium' | 'large'

type TagModifier = 'rounded' | 'delete'

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
   * To make a rounded Tag or to turn the tag into a delete button.
   */
  readonly modifier?: TagModifier
}

export const Tag: React.FC<TagProps> = ({
  size,
  variant,
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tag', {
    [`is-${size}`]: size,
    [`is-${modifier}`]: modifier,
    [`is-${variant}`]: variant,
  })

  return (
    <Div as="span" {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default Tag
