import * as React from 'react'
import classNames from 'classnames'
import {
  Helpers,
  helpersClasses,
  HelpersRemoved,
  removeHelpers,
} from './helpers'

interface FooterProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

// @TODO: children should be Content
export const Footer: React.SFC<FooterProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemove: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames('footer', className, helpersClasses(props))

  return (
    <footer {...propsHelpersRemove} {...props} className={classes}>
      {children}
    </footer>
  )
}
