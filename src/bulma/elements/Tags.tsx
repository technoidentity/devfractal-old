import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type TagsSize = 'medium' | 'large'

export interface TagsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly size?: TagsSize
  readonly addons?: boolean
}

export const Tags: React.SFC<TagsProps> = ({
  size,
  addons,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tags', {
    [`are-${size}`]: size,
    [`has-addons`]: addons,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
