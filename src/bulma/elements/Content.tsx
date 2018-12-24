import React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

type ContentSize = 'small' | 'medium' | 'large'

interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly size?: ContentSize
}

export const Content: React.SFC<ContentProps> = ({
  size,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'content',
    {
      [`is-${size}`]: size,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
