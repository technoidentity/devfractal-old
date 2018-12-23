import * as React from 'react'

import { classNamesHelper } from '../modifiers'

import { ControlWrapper } from './ControlHelpers'

import { ControlDiv, AllControlHelpers } from './ControlDiv'

type InputVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger'

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
  | 'week'

type InputState = 'hovered' | 'focused'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {
  readonly variant?: InputVariant
  readonly rounded?: boolean
  readonly state?: InputState
  readonly type?: InputType
}

export const Input: React.SFC<InputProps> = ({
  noControl,
  variant,
  rounded,
  state,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'input', {
    [`is-${variant}`]: variant,
    [`is-${props.controlSize}`]: props.controlSize,
    [`is-rounded`]: rounded,
    [`is-${state}`]: state,
  })

  return (
    <ControlWrapper {...props}>
      <ControlDiv {...props} className={classes} />
    </ControlWrapper>
  )
}
