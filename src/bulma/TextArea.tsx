import * as React from 'react'
import classNames from 'classnames'

type TextAreaColor = 'primary' | 'info' | 'warning' | 'success' | 'danger'

type TextAreaSize = 'small' | 'large' | 'normal' | 'medium'

type TextAreaState = 'normal' | 'hovered' | 'focused' | 'loading' | 'disabled'

interface TextAreaProps {
  readonly color?: TextAreaColor
  readonly size?: TextAreaSize
  readonly state?: TextAreaState
  readonly placeholder?: string
  readonly disabled?: boolean
  readonly rows: number
}

export const TextArea: React.SFC<TextAreaProps> = ({
  color,
  size,
  state,
  placeholder,
  disabled,
  rows,
}) => {
  const classes: string = classNames('textarea', {
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
  })
  return (
    <div className="control">
      <textarea
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
      />
    </div>
  )
}
