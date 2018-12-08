import * as React from 'react'

import classNames from 'classnames'
import {
  Helpers,
  helpersClasses,
  removeHelpers,
  HelpersRemoved,
} from './helpers'

type InputColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

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

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Helpers {
  readonly color?: InputColor
  readonly inputSize?: InputSize
  readonly rounded?: boolean
  readonly state?: InputState
  readonly type: InputType
}

export const Input: React.SFC<InputProps> = ({
  color,
  inputSize,
  rounded,
  state,
  className,
  ...props
}) => {
  const propsRemoveHelpers: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    className,
    'input',
    helpersClasses(props),
    {
      [`is-${color}`]: color,
      [`is-${inputSize}`]: inputSize,
      [`is-rounded`]: rounded,
      [`is-${state}`]: state,
    },
  )
  return (
    <div className="control">
      <input {...propsRemoveHelpers} {...props} className={classes} />
    </div>
  )
}
