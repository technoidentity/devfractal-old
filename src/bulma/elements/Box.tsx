import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {}

export const Box: React.SFC<BoxProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'box')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
