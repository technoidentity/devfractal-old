import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type ProgressBarVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'
  | 'dark'
  | 'light'

type ProgressBarSize = 'small' | 'medium' | 'large'

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLProgressElement>,
    Helpers {
  readonly size?: ProgressBarSize
  readonly variant?: ProgressBarVariant
  readonly value?: string
  readonly max: string
}

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  size,
  variant,
  children,
  max,
  value,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'progress', {
    [`is-${size}`]: size,
    [`is-${variant}`]: variant,
  })

  return (
    <Div as="progress" {...props} className={classes} value={value} max={max}>
      {children}
    </Div>
  )
}
