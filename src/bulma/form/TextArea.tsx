import * as React from 'react'

import classNames from 'classnames'

import { Helpers, removeHelpers, helpersClasses } from '../modifiers'

type TextAreaVariant = 'primary' | 'info' | 'warning' | 'success' | 'danger'

type TextAreaSize = 'small' | 'large' | 'normal' | 'medium'

type TextAreaState = 'normal' | 'hovered' | 'focused'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Helpers {
  readonly variant?: TextAreaVariant
  readonly size?: TextAreaSize
  readonly state?: TextAreaState
  readonly rows?: number
}

export const TextArea: React.SFC<TextAreaProps> = ({
  variant,
  size,
  state,
  rows,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'textarea',
    {
      [`is-${variant}`]: variant,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
    },
    helpersClasses(props),
    className,
  )

  return (
    <div className="control">
      <textarea {...removeHelpers(props)} className={classes} />
    </div>
  )
}
