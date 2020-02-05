import React from 'react'
import { classNamesHelper } from '../base'
import { AllControlHelpers, ControlDiv } from './controlDiv'
import { ControlWrapper } from './ControlWrapper'

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
  /**
   * You can style the input element by appending color(variant) modifiers
   */
  readonly variant?: InputVariant

  readonly rounded?: boolean
  /**
   * Specifies the width of the <Input> element
   */
  readonly fullWidth?: boolean

  readonly inline?: boolean
  readonly state?: InputState

  /**
   * Specifies the type <Input> element to display.This is the most important attribute, as it determines everything else about how the <Input> element behaves.
   */
  readonly type?: InputType
}

export const Input: React.FC<InputProps> = ({
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
