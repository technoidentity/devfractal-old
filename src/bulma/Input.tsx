import React from 'react'

import classNames from 'classnames'

type InputColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type InputSize = 'small' | 'medium' | 'large'

type InputStyle = 'rounded'

type InputState = 'hovered' | 'focused'

interface InputProps {
  readonly color?: InputColor
  readonly size?: InputSize
  readonly style?: InputStyle
  readonly state?: InputState
  readonly placeholder?: string
  readonly name: string
  readonly value?: string
  readonly disabled?: boolean
}

export const Input: React.SFC<InputProps> = ({
  color,
  size,
  style,
  state,
  placeholder,
  name,
  value,
  disabled,
}) => {
  const classes: string = classNames('input', {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    [`is-${style}`]: style,
    [`is-${state}`]: state,
  })
  return (
    <input
      className={classes}
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      disabled={disabled}
    />
  )
}
