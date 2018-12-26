import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

// @TODO: children should be Content
export const Footer: React.SFC<FooterProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'footer',
    className,
    commonHelpersClasses(props),
  )

  return (
    <footer {...propsHelpersRemoved} className={classes}>
      {children}
    </footer>
  )
}
