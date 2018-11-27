import * as React from 'react'
import classNames from 'classnames'

import { Tag } from './Tag'

type TagsSize = 'medium' | 'large'

interface TagsProps {
  readonly size?: TagsSize
  readonly addons?: boolean
  readonly children: ReadonlyArray<Tag>
}

export const Tags: React.SFC<TagsProps> = ({ size, addons, children }) => {
  const classes: string = classNames('tags', {
    [`are-${size}`]: size,
    [`has-addons`]: addons,
  })
  return <div className={classes}>{children}</div>
}
