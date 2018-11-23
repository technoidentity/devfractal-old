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

type ButtonState =
  | 'normal'
  | 'hover'
  | 'focused'
  | 'active'
  | 'loading'
  | 'static'

interface ButtonProps {
  readonly color?: ButtonColor
  readonly size?: ButtonSize
  readonly display?: ButtonDisplay
  readonly style?: ButtonStyle
  readonly state?: ButtonState
  readonly fullwidth?: boolean
  readonly children: React.ReactChild
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.SFC<ButtonProps> = ({
  color,
  size,
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
