import * as React from 'react'
import classNames from 'classnames'

type DeleteSize = 'small' | 'medium' | 'large'

interface DeleteProps {
  readonly size?: DeleteSize
}

export const Delete: React.SFC<DeleteProps> = ({ size }) => {
  const classes: string = classNames('delete', {
    [`is-${size}`]: size,
  })
  return <div className={classes} />
}
