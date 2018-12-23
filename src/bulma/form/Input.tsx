import * as React from 'react'

import { Helpers, classNamesHelper } from '../modifiers'

import { ControlHelpers, ControlWrapper } from './ControlHelpers'
import { IconHelpers } from './iconHelpers'
import { ControlDiv } from './ControlDiv'

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
    ControlHelpers,
    Helpers,
    IconHelpers {
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
