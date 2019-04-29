import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

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
  return <Div as="a" {...props} className={classes} />
}

// tslint:disable-next-line: no-default-export
export default Delete
