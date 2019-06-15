import React from 'react'
import { classNamesHelper, El, Helpers } from '../lib'

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const Box: React.FC<BoxProps> = ({ children, ...props }) => (
  <El {...props} className={classNamesHelper(props, 'box')}>
    {children}
  </El>
)

// tslint:disable-next-line: no-default-export
export default Box
