import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const Box: React.SFC<BoxProps> = ({ children, ...props }) => (
  <Div {...props} className={classNamesHelper(props, 'box')}>
    {children}
  </Div>
)
