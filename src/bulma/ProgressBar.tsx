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

interface ProgressBarProps {
  readonly size?: ProgressBarSize
  readonly color?: ProgressBarColor
  readonly value?: string
  readonly max: string
  readonly children: React.ReactChild
}

export const ProgressBar: React.SFC<ProgressBarProps> = ({
  size,
  color,
  children,
  max,
  value,
}) => {
  const classes: string = classNames('progress', {
    [`is-${size}`]: size,
    [`is-${color}`]: color,
  })

  return (
    <progress className={classes} value={value} max={max}>
      {children}
    </progress>
  )
}
