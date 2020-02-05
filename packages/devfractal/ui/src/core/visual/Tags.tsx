import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type TagsAlignment = 'centered' | 'right'

export interface TagsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  /**
   * alters the alignment of the tags
   */
  readonly alignment?: TagsAlignment
  /**
   * attach tags together
   */
  readonly addons?: boolean
}

export const Tags: React.FC<TagsProps> = ({
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
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
