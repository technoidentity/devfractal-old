import * as React from 'react'
import classNames from 'classnames'

type ProgressBarColor =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type ProgressBarSize = 'small' | 'medium' | 'large'

interface ProgressBarProps extends React.HTMLAttributes<HTMLProgressElement> {
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
  const classes: string = classNames(
    'progress',
    {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    },
    className,
  )

  return (
    <progress {...props} className={classes} value={value} max={max}>
      {children}
    </progress>
  )
}
