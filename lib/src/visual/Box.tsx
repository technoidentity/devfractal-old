import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const Box: React.FC<BoxProps> = ({ children, ...props }) => (
  <Div {...props} className={classNamesHelper(props, 'box')}>
    {children}
  </Div>
)

// tslint:disable-next-line: no-default-export
export default Box
