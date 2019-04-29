import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

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
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default Tags
