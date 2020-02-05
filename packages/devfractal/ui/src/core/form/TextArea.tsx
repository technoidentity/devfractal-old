import React from 'react'
import { classNamesHelper } from '../base'
import { AllControlHelpers, ControlDiv } from './controlDiv'
import { ControlWrapper } from './ControlWrapper'

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
  /**
   * You can style the textarea element by appending color(variant) modifiers
   */
  readonly variant?: TextAreaVariant
  /**
   * While the default size is the normal one.we can apply other sizes like medium,small,large
   */
  readonly size?: TextAreaSize
  /**
   * specifies that the size of the textarea is fixed
   */
  readonly fixedSize?: boolean
  /**
   * specifies the width of the textarea
   */
  readonly fullWidth?: boolean

  readonly inline?: boolean
  readonly state?: TextAreaState

  /**
   * you can set the height of the textarea
   */
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
