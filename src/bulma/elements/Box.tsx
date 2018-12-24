import React from 'react'

import classNames from 'classnames'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const Box: React.SFC<BoxProps> = ({ children, className, ...props }) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'box',
    commonHelpersClasses(props),
    className,
  )
  return (
    <div {...propsHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
