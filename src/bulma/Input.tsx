import React from 'react'

type InputColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type InputSize = 'small' | 'medium' | 'large'

type InputStyle = 'rounded'

type InputState = 'hovered' | 'focused'

interface InputProps {
  readonly color: InputColor
  readonly size: InputSize
  readonly style: InputStyle
  readonly state: InputState
  readonly placeHolder: string
  readonly disabled: boolean
}

export const Input: React.SFC<InputProps> = props => (
  <input
    className={`input is-${props.color} is-${props.size} is-${props.style} is-${
      props.state
    }`}
    type="text"
    placeholder={props.placeHolder}
    disabled={props.disabled}
  />
)
