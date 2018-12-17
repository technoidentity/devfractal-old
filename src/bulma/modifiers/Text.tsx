import * as React from 'react'
import classNames from 'classnames'

import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from './commonHelpers'

import {
  TextHelpers,
  textHelpersClasses,
  removeTextHelpers,
} from './textHelpers'

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    CommonHelpers,
    TextHelpers {}

export const Text: React.SFC<TextProps> = ({
  children,
  className,
  ...props
}) => {
  const propsRemoved: CommonHelpersRemoved<typeof props> = removeTextHelpers(
    removeCommonHelpers(props),
  )

  const classes: string = classNames(
    commonHelpersClasses(props),
    textHelpersClasses(props),
    className,
  )

  return (
    <span {...propsRemoved} className={classes}>
      {children}
    </span>
  )
}
