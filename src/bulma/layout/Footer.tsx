import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface FooterProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

// @TODO: children should be Content
export const Footer: React.SFC<FooterProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'footer')

  return (
    <Div as="footer" {...props} className={classes}>
      {children}
    </Div>
  )
}
