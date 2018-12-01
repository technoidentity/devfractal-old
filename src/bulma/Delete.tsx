import * as React from 'react'
import classNames from 'classnames'

type DeleteSize = 'small' | 'medium' | 'large'

interface DeleteProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly size?: DeleteSize
}

export const Delete: React.SFC<DeleteProps> = ({
  size,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'delete',
    {
      [`is-${size}`]: size,
    },
    className,
  )
  return <a {...props} className={classes} />
}
