import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface TagsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly addons?: boolean
}

export const Tags: React.SFC<TagsProps> = ({ addons, children, ...props }) => {
  const classes: string = classNamesHelper(props, 'tags', {
    [`has-addons`]: addons,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
