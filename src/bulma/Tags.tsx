import * as React from 'react'
import classNames from 'classnames'

type TagsSize = 'medium' | 'large'

interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly size?: TagsSize
  readonly addons?: boolean
}

export const Tags: React.SFC<TagsProps> = ({ size, addons, children }) => {
  const classes: string = classNames('tags', {
    [`are-${size}`]: size,
    [`has-addons`]: addons,
  })
  return <div className={classes}>{children}</div>
}
