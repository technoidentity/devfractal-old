import * as React from 'react'

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
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>
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
  onChange,
  disabled,
}) => {
  const classes: string = classNames('input', {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    [`is-${style}`]: style,
    [`is-${state}`]: state,
  })
  return (
    <div className="control">
      <input
        className={classes}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}
