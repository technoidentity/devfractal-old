import React from 'react'
import { classNamesHelper } from '../lib'
import { AllControlHelpers, ControlDiv, ControlWrapper } from './internal'

type InputVariant =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'dark'
  | 'light'
  | 'black'

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'tel'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'number'
  | 'range'
  | 'search'
  | 'time'
  | 'url'
  | 'link'
  | 'week'

type InputState = 'hovered' | 'focused' | 'static' | 'active'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {
  readonly variant?: InputVariant
  readonly rounded?: boolean
  readonly fullWidth?: boolean
  readonly inline?: boolean
  readonly state?: InputState
  readonly type?: InputType
}

export const Input: React.FC<InputProps> = ({
  noControl,
  variant,
  fullWidth,
  inline,
  rounded,
  state,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'input', {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
    'is-rounded': rounded,
    [`is-${variant}`]: variant,
    [`is-${props.ctrlSize}`]: props.ctrlSize,
    [`is-${state}`]: state,
  })

  return (
    <ControlWrapper {...props}>
      <ControlDiv {...props} className={classes} />
    </ControlWrapper>
  )
}
