import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

// @TODO: children should be Content

export const Footer: React.FC<FooterProps> = ({ children, ...props }) => (
  <Div as="footer" {...props} className={classNamesHelper(props, 'footer')}>
    {children}
  </Div>
)
