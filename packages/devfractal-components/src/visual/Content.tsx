import React from 'react'
import { classNamesHelper, El, Helpers } from '../lib'

type ContentSize = 'small' | 'medium' | 'large'

export interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  /**
   * For resizing the content
   */
  readonly size?: ContentSize
}

export const Content: React.FC<ContentProps> = ({
  size,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'content', {
    [`is-${size}`]: size,
  })
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

// tslint:disable-next-line: no-default-export
export default Content
