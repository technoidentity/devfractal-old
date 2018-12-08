import * as React from 'react'

import classNames from 'classnames'
import {
  Helpers,
  removeHelpers,
  helpersClasses,
  HelpersRemoved,
} from './helpers'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {}

export const Box: React.SFC<BoxProps> = ({ children, className, ...props }) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames('box', helpersClasses(props), className)
  return (
    <div {...propsHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
