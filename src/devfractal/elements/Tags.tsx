import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

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
