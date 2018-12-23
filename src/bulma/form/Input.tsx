import * as React from 'react'

import { Helpers, removeHelpers, classNamesHelper } from '../modifiers'

import { ControlHelpers, removeControlHelpers, Control } from './ControlHelpers'
import { IconHelpers, removeIconHelpers } from './iconHelpers'

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
  readonly noControl?: true
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

  const input: JSX.Element = (
    <input
      {...removeIconHelpers(removeControlHelpers(removeHelpers(props)))}
      className={classes}
    />
  )

  return noControl ? input : <Control {...props}>{input}</Control>
}
