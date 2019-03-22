import React from 'react'
import { classNamesHelper } from '..'
import { AllControlHelpers, ControlDiv, ControlWrapper } from './internal'

type ButtonType = 'button' | 'reset' | 'submit'

type ButtonVariant =
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | 'text'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type ButtonSize = 'small' | 'normal' | 'medium' | 'large'

type ButtonModifier = 'selected'

type ButtonState =
  | 'normal'
  | 'hovered'
  | 'focused'
  | 'active'
  | 'loading'
  | 'static'
  | 'selected'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    AllControlHelpers {
  /* @ignore */
  readonly variant?: ButtonVariant
  readonly size?: ButtonSize
  readonly modifier?: ButtonModifier
  readonly state?: ButtonState
  readonly fullWidth?: boolean
  readonly rounded?: boolean
  readonly inverted?: boolean
  readonly outlined?: boolean
  readonly type?: ButtonType
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  modifier,
  state,
  fullWidth,
  rounded,
  inverted,
  outlined,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'button', {
    [`is-${variant}`]: variant,
    [`is-${modifier}`]: modifier,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
    'is-rounded': rounded,
    'is-inverted': inverted,
    'is-outlined': outlined,
    'is-fullwidth': fullWidth,
  })

  return (
    <ControlWrapper {...props}>
      <ControlDiv as="button" {...props} className={classes}>
        {children}
      </ControlDiv>
    </ControlWrapper>
  )
}

// tslint:disable no-default-export
export default Button
