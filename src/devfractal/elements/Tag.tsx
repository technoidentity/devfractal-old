import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

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
  readonly size?: TagSize
  readonly variant?: TagVariant
  readonly modifier?: TagModifier
}

export const Tag: React.SFC<TagProps> = ({
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

type TagsAlignment = 'centered' | 'right'

export interface TagsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly alignment?: TagsAlignment
  readonly addons?: boolean
}

export const Tags: React.SFC<TagsProps> = ({
  alignment,
  addons,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tags', {
    [`is-${alignment}`]: alignment,
    'has-addons': addons,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
