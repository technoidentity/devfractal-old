import * as React from 'react'
import classNames from 'classnames'

type ButtonColor =
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

type ButtonDisplay = 'small' | 'normal' | 'medium' | 'large'

type ButtonModifier = 'selected'

type ButtonStyle = 'rounded' | 'inverted' | 'outlined'

type ButtonState =
  | 'normal'
  | 'hovered'
  | 'focused'
  | 'active'
  | 'loading'
  | 'static'

interface ButtonsProps {
  readonly alignment?: 'centered' | 'right'
  readonly addons?: boolean
}

export const Buttons: React.SFC<ButtonsProps> = ({
  addons,
  alignment,
  children,
}) => {
  const classes: string = classNames('buttons', {
    [`is-${alignment}`]: alignment,
    [`has-${addons}`]: addons,
  })

  return <div className={classes}>{children}</div>
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly color?: ButtonColor
  readonly size?: ButtonSize
  readonly modifier?: ButtonModifier
  readonly display?: ButtonDisplay
  readonly state?: ButtonState
  readonly fullwidth?: boolean
  readonly buttonStyle?: ButtonStyle
}

export const Button: React.SFC<ButtonProps> = ({
  color,
  size,
  modifier,
  display,
  state,
  fullwidth,
  buttonStyle,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'button',
    {
      [`is-${color}`]: color,
      [`is-${display}`]: display,
      [`is-${modifier}`]: modifier,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
      [`is-${buttonStyle}`]: buttonStyle,
      [`is-fullwidth`]: fullwidth,
    },
    className,
  )
  return (
    <div className="control">
      <button {...props} className={classes}>
        {children}
      </button>
    </div>
  )
}
