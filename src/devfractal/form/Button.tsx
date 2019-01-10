import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'
import { AllControlHelpers, ControlDiv } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

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

type ButtonType = 'button' | 'reset' | 'submit'

export interface ButtonsGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly alignment?: 'centered' | 'right'
  readonly addons?: boolean
}

export const ButtonsGroup: React.SFC<ButtonsGroupProps> = ({
  addons,
  alignment,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'buttons', {
    [`is-${alignment}`]: alignment,
    [`has-${addons}`]: addons,
  })

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    AllControlHelpers {
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

export const Button: React.SFC<ButtonProps> = ({
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
