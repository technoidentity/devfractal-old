import React from 'react'
import {
  AllControlHelpers,
  classNamesHelper,
  ControlDiv,
  ControlWrapper,
} from '../lib'

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

type TextAreaSize = 'small' | 'medium' | 'large'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    AllControlHelpers {
  readonly variant?: TextAreaVariant
  readonly size?: TextAreaSize
  readonly fixedSize?: boolean
  readonly fullWidth?: boolean
  readonly inline?: boolean
  readonly state?: TextAreaState
  readonly rows?: number
}

export const TextArea: React.FC<TextAreaProps> = ({
  variant,
  size,
  fixedSize,
  fullWidth,
  inline,
  rows,
  state,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'textarea', {
    [`is-${variant}`]: variant,
    [`is-${size}`]: size,
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
