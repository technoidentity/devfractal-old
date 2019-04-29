import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

// @TODO: children should be Content

export const Footer: React.FC<FooterProps> = ({ children, ...props }) => (
  <Div as="footer" {...props} className={classNamesHelper(props, 'footer')}>
    {children}
  </Div>
)

// tslint:disable-next-line: no-default-export
export default Footer
