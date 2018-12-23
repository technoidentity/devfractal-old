import * as React from 'react'

import { Helpers, classNamesHelper, Div } from '../modifiers'
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

type ButtonStyle = 'rounded' | 'inverted' | 'outlined'

type ButtonState =
  | 'normal'
  | 'hovered'
  | 'focused'
  | 'active'
  | 'loading'
  | 'static'

type ButtonType = 'button' | 'reset' | 'submit'

export interface ButtonsProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly alignment?: 'centered' | 'right'
  readonly addons?: boolean
  readonly type?: ButtonType
}

export const Buttons: React.SFC<ButtonsProps> = ({
  addons,
  alignment,
  children,
  type = 'button',
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

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    AllControlHelpers {
  readonly variant?: ButtonVariant
  readonly size?: ButtonSize
  readonly modifier?: ButtonModifier
  readonly state?: ButtonState
  readonly fullWidth?: boolean
  readonly buttonStyle?: ButtonStyle
}

export const Button: React.SFC<ButtonProps> = ({
  variant,
  size,
  modifier,
  state,
  fullWidth,
  buttonStyle,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'button', {
    [`is-${variant}`]: variant,
    [`is-${modifier}`]: modifier,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
    [`is-${buttonStyle}`]: buttonStyle,
    [`is-fullwidth`]: fullWidth,
  })

  return (
    <ControlWrapper {...props}>
      <ControlDiv as="button" {...props} className={classes}>
        {children}
      </ControlDiv>
    </ControlWrapper>
  )
}
