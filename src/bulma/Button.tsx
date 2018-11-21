import * as React from 'react'

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
  readonly color: ButtonColor
  readonly size: ButtonSize
  readonly display: ButtonDisplay
  readonly style: ButtonStyle
  readonly state: ButtonState
  readonly children: React.ReactChild
}

export const Button: React.SFC<ButtonProps> = ({
  color,
  size,
  display,
  style,
  state,
  children,
}) => (
  <div className="control">
    <button
      className={`button is-${color} is-${size} is-${display} is-${style} is-${state}`}
    >
      {children}
    </button>
  </div>
)
