import * as React from 'react'

import classNames from 'classnames'

import { Helpers, helpersClasses, removeHelpers } from '../modifiers'

import {
  ControlHelpers,
  controlClasses,
  removeControlHelpers,
  ControlSize,
} from './ControlHelpers'

import { Icon } from './Icon'

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
    Helpers {
  readonly variant?: InputVariant
  readonly controlSize?: ControlSize
  readonly rounded?: boolean
  readonly state?: InputState
  readonly type?: InputType
}

export const Input: React.SFC<InputProps> = ({
  variant,
  rounded,
  state,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'input',
    {
      [`is-${variant}`]: variant,
      [`is-${props.controlSize}`]: props.controlSize,
      [`is-rounded`]: rounded,
      [`is-${state}`]: state,
    },
    helpersClasses(props),
    className,
  )

  return (
    <div className={controlClasses(props)}>
      <input
        {...removeControlHelpers(removeHelpers(props))}
        className={classes}
      />
      {props.leftIcon && <Icon icon={props.leftIcon} direction="left" />}
      {props.rightIcon && <Icon icon={props.rightIcon} direction="right" />}
    </div>
  )
}
