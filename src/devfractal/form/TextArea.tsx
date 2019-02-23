import React from 'react'
import { classNamesHelper } from '../internal'
import { AllControlHelpers, ControlDiv, ControlWrapper } from './internal'

type TextAreaVariant =
  | 'primary'
  | 'info'
  | 'warning'
  | 'success'
  | 'danger'
  | 'dark'
  | 'light'
  | 'white'
  | 'black'

type TextAreaState = 'hovered' | 'focused' | 'static' | 'active'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    AllControlHelpers {
  readonly variant?: TextAreaVariant
  readonly fixedSize?: boolean
  readonly fullWidth?: boolean
  readonly inline?: boolean
  readonly state?: TextAreaState
  readonly rows?: number
}

export const TextArea: React.SFC<TextAreaProps> = ({
  variant,
  fixedSize,
  fullWidth,
  inline,
  rows,
  state,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'textarea', {
    [`is-${variant}`]: variant,
    'has-fixed-size': fixedSize,
    'is-fullwidth': fullWidth,
    'is-inline': inline,
    [`is-${props.ctrlSize}`]: props.ctrlSize,
    [`is-${state}`]: state,
  })

  return (
    <ControlWrapper {...props}>
      <ControlDiv as="textarea" {...props} className={classes} rows={rows} />
    </ControlWrapper>
  )
}
