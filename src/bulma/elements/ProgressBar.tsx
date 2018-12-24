import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type ProgressBarVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type ProgressBarSize = 'small' | 'medium' | 'large'

interface ProgressBarProps
  extends React.HTMLAttributes<HTMLProgressElement>,
    CommonHelpers {
  readonly size?: ProgressBarSize
  readonly variant?: ProgressBarVariant
  readonly value?: string
  readonly max: string
}

export const ProgressBar: React.SFC<ProgressBarProps> = ({
  size,
  variant,
  children,
  max,
  value,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'progress',
    {
      [`is-${size}`]: size,
      [`is-${variant}`]: variant,
    },
    className,
    commonHelpersClasses(props),
  )

  return (
    <progress
      {...propsCommonHelpersRemoved}
      className={classes}
      value={value}
      max={max}
    >
      {children}
    </progress>
  )
}
