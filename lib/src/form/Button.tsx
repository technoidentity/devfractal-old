import React from 'react'
import {
  AllControlHelpers,
  classNamesHelper,
  ControlDiv,
  ControlWrapper,
} from '../lib'

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
  readonly variant?: ButtonVariant
  /**
   * While the default size is the normal one, the normal modifier exists in case you need to reset the button to its normal size.
   */
  readonly size?: ButtonSize
  readonly state?: ButtonState
  readonly fullWidth?: boolean
  readonly rounded?: boolean
  readonly inverted?: boolean
  readonly outlined?: boolean
  readonly type?: ButtonType
}

export const Button: React.FC<ButtonProps> = ({
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
      <ControlDiv as="button" {...props} className={classes}>
        {children}
      </ControlDiv>
    </ControlWrapper>
  )
}

// tslint:disable no-default-export
export default Button
