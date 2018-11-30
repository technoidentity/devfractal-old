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

type ButtonDisplay = 'small' | 'normal' | 'medium' | 'large' | 'fullwidth'

type ButtonStyle = 'inverted' | 'outlined' | 'rounded'

type ButtonModifier = 'selected'

type ButtonState =
  | 'normal'
  | 'hover'
  | 'focused'
  | 'active'
  | 'loading'
  | 'static'

interface ButtonsProps {
  readonly alignment?: 'centered' | 'right'
  readonly addons?: boolean
}
interface ButtonProps {
  readonly color?: ButtonColor
  readonly size?: ButtonSize
  readonly modifier?: ButtonModifier
  readonly display?: ButtonDisplay
  readonly style?: ButtonStyle
  readonly state?: ButtonState
  readonly fullwidth?: boolean
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Buttons: React.SFC<ButtonsProps> = ({
  addons,
  alignment,
  children,
}) => {
  const classes: string = classNames('buttons', {
    [`is-${alignment}`]: alignment,
    'has-addons': addons,
  })

  return <div className={classes}>{children}</div>
}

export const Button: React.SFC<ButtonProps> = ({
  color,
  size,
  modifier,
  display,
  style,
  state,
  fullwidth,
  children,
  onClick,
}) => {
  const classes: string = classNames('button', {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    [`is-${modifier}`]: modifier,
    [`is-${display}`]: display,
    [`is-${style}`]: style,
    [`is-${state}`]: state,
    'is-fullwidth': fullwidth,
  })
  return (
    <div className="control">
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}
