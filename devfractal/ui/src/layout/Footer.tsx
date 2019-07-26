import React from 'react'
import { classNamesHelper, El, Helpers } from '../lib'

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

// @TODO: children should be Content

export const Footer: React.FC<FooterProps> = ({ children, ...props }) => (
  <El as="footer" {...props} className={classNamesHelper(props, 'footer')}>
    {children}
  </El>
)

// tslint:disable-next-line: no-default-export
export default Footer
