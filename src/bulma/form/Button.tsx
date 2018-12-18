import * as React from 'react'

import classNames from 'classnames'

import { Helpers, removeHelpers, helpersClasses } from '../modifiers'

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

export interface ButtonsProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    Helpers {
  readonly alignment?: 'centered' | 'right'
  readonly addons?: boolean
}

export const Buttons: React.SFC<ButtonsProps> = ({
  addons,
  alignment,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'buttons',
    {
      [`is-${alignment}`]: alignment,
      [`has-${addons}`]: addons,
    },
    className,
    helpersClasses(props),
  )

  return (
    <div className="control">
      <button {...removeHelpers(props)} className={classes}>
        {children}
      </button>
    </div>
  )
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Helpers {
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
  className,
  ...props
}) => {
  const classes: string = classNames(
    'button',
    {
      [`is-${variant}`]: variant,
      [`is-${modifier}`]: modifier,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
      [`is-${buttonStyle}`]: buttonStyle,
      [`is-fullwidth`]: fullWidth,
    },
    helpersClasses(props),
    className,
  )
  return (
    <div className="control">
      <button {...removeHelpers(props)} className={classes}>
        {children}
      </button>
    </div>
  )
}
