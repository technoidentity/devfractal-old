import React from 'react'
import { classNamesHelper } from '../base'
import { AllControlHelpers, ControlDiv } from './controlDiv'
import { ControlWrapper } from './ControlWrapper'

type ButtonType = 'button' | 'reset' | 'submit'

type ButtonVariant =
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | 'text'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type ButtonSize = 'small' | 'normal' | 'medium' | 'large'

type ButtonState =
  | 'normal'
  | 'hovered'
  | 'focused'
  | 'active'
  | 'loading'
  | 'static'
  | 'selected'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    AllControlHelpers {
  /**
   * variant defines the various colors which we can use for Button
   */
  readonly variant?: ButtonVariant
  /**
   * While the default size is the normal one, the normal modifier exists in case you need to reset the button to its normal size.
   */
  readonly size?: ButtonSize

  readonly state?: ButtonState
  readonly fullWidth?: boolean

  /**
   * The shape of the button will be Rounded rectangle
   */
  readonly rounded?: boolean
  /**
   * The text color becomes the background color , and vice-versa
   */
  readonly inverted?: boolean
  /**
   * While used along with inverted the invert color becomes the text and border colors
   */
  readonly outlined?: boolean

  readonly type?: ButtonType
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant,
  size,
  state,
  fullWidth,
  rounded,
  inverted,
  outlined,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'button', {
    [`is-${variant}`]: variant,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
    'is-rounded': rounded,
    'is-inverted': inverted,
    'is-outlined': outlined,
    'is-fullwidth': fullWidth,
  })

  return (
    <ControlWrapper {...props}>
      <ControlDiv as="button" {...props} type={type} className={classes}>
        {children}
      </ControlDiv>
    </ControlWrapper>
  )
}
