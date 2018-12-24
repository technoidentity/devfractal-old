import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type DeleteSize = 'small' | 'medium' | 'large'

interface DeleteProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {
  readonly size?: DeleteSize
}

export const Delete: React.SFC<DeleteProps> = ({
  size,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'delete',
    {
      [`is-${size}`]: size,
    },
    className,
    commonHelpersClasses(props),
  )
  return <a {...propsCommonHelpersRemoved} className={classes} />
}
