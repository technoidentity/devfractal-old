import React from 'react'
import { classNamesHelper, Div, Helpers } from '../internal'

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

// @TODO: children should be Content

export const Footer: React.SFC<FooterProps> = ({ children, ...props }) => (
  <Div as="footer" {...props} className={classNamesHelper(props, 'footer')}>
    {children}
  </Div>
)
