import * as React from 'react'

import classNames from 'classnames'

import { Helpers, helpersClasses, removeHelpers } from '../modifiers'

type InputVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type InputSize = 'small' | 'medium' | 'large'

type InputType =
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
    Helpers {
  readonly variant?: InputVariant
  readonly inputSize?: InputSize
  readonly rounded?: boolean
  readonly state?: InputState
  readonly type?: InputType
}

export const Input: React.SFC<InputProps> = ({
  variant,
  inputSize,
  rounded,
  state,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'input',
    {
      [`is-${variant}`]: variant,
      [`is-${inputSize}`]: inputSize,
      [`is-rounded`]: rounded,
      [`is-${state}`]: state,
    },
    helpersClasses(props),
    className,
  )

  return (
    <div className="control">
      <input {...removeHelpers(props)} className={classes} />
    </div>
  )
}
