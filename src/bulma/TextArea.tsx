import * as React from 'react'
import classNames from 'classnames'

type TextAreaColor = 'primary' | 'info' | 'warning' | 'success' | 'danger'

type TextAreaSize = 'small' | 'large' | 'normal' | 'medium'

type TextAreaState = 'normal' | 'hovered' | 'focused'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly color?: TextAreaColor
  readonly size?: TextAreaSize
  readonly state?: TextAreaState
  readonly rows?: number
}

export const TextArea: React.SFC<TextAreaProps> = ({
  color,
  size,
  state,
  rows,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'textarea',
    {
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
    },
    className,
  )
  return (
    <div className="control">
      <textarea {...props} className={classes} />
    </div>
  )
}
