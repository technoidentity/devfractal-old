import * as React from 'react'
import classNames from 'classnames'

type ContentSize = 'small' | 'medium' | 'large'

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly size?: ContentSize
}

export const Content: React.SFC<ContentProps> = ({
  size,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'content',
    {
      [`is-${size}`]: size,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
