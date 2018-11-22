import * as React from 'react'
import classNames from 'classnames'

type ContentSize = 'small' | 'medium' | 'large'

interface ContentProps {
  readonly size?: ContentSize
  readonly children: React.ReactNode
}

export const Content: React.SFC<ContentProps> = ({ size, children }) => {
  const classes: string = classNames('content', {
    [`is-${size}`]: size,
  })
  return <div className={classes}>{children}</div>
}
