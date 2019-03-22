import React from 'react'
import { classNamesHelper, Div, Helpers } from '..'

type ContentSize = 'small' | 'medium' | 'large'

export interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
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
