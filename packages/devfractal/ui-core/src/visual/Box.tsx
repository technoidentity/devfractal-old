import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const Box: React.FC<BoxProps> = ({ children, ...props }) => (
  <El {...props} className={classNamesHelper(props, 'box')}>
    {children}
  </El>
)
