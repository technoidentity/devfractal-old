import * as React from 'react'

interface FooterProps {
  readonly children: React.ReactChild
}
// @TODO: children should be Content
export const Footer: React.SFC<FooterProps> = ({ children }) => (
  <footer className="footer">{children}</footer>
)
