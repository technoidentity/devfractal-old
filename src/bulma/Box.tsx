import * as React from 'react'

import classNames from 'classnames'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Box: React.SFC<BoxProps> = ({ children, className, ...props }) => {
  const classes: string = classNames('box', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
