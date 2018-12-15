import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

type ProgressBarColor =
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
  readonly color?: ProgressBarColor
  readonly value?: string
  readonly max: string
}

export const ProgressBar: React.SFC<ProgressBarProps> = ({
  size,
  color,
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
      [`is-${color}`]: color,
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
