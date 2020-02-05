import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type DeleteSize = 'small' | 'medium' | 'large'

export interface DeleteProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  /**
   * Resize the delete element
   */
  readonly size?: DeleteSize
}

export const Delete: React.FC<DeleteProps> = ({ size, ...props }) => {
  const classes: string = classNamesHelper(props, 'delete', {
    [`is-${size}`]: size,
  })
  return <El as="a" {...props} className={classes} />
}
