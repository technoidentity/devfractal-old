import * as React from 'react'
import classNames from 'classnames'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

// @TODO: children should be Content
export const Footer: React.SFC<FooterProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('footer', className)

  return (
    <footer className={classes} {...props}>
      {children}
    </footer>
  )
}
