import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type DeleteSize = 'small' | 'medium' | 'large'

interface DeleteProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly size?: DeleteSize
}

export const Delete: React.SFC<DeleteProps> = ({ size, ...props }) => {
  const classes: string = classNamesHelper(props, 'delete', {
    [`is-${size}`]: size,
  })
  return <Div as="a" {...props} className={classes} />
}
