import * as React from 'react'
import classNames from 'classnames'

type TagsSize = 'medium' | 'large'

interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly size?: TagsSize
  readonly addons?: boolean
}

export const Tags: React.SFC<TagsProps> = ({
  size,
  addons,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'tags',
    {
      [`are-${size}`]: size,
      [`has-addons`]: addons,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
