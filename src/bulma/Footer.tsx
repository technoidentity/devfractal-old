import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from './commonHelpers'

interface FooterProps
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
