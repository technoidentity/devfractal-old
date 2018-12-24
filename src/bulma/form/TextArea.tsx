import React from 'react'
import { classNamesHelper } from '../modifiers'
import { AllControlHelpers, ControlDiv } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

type TextAreaVariant = 'primary' | 'info' | 'warning' | 'success' | 'danger'

type TextAreaSize = 'small' | 'large' | 'normal' | 'medium'

type TextAreaState = 'normal' | 'hovered' | 'focused'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    AllControlHelpers {
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
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'textarea', {
    [`is-${variant}`]: variant,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
  })

  return (
    <ControlWrapper {...props}>
      <ControlDiv as="textarea" {...props} className={classes} />
    </ControlWrapper>
  )
}
