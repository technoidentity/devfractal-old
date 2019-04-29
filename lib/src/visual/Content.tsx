import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

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
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default Content
