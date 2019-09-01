import React from 'react'
import { classNames, classNamesHelper } from '../base'
import { AllControlHelpers, ControlDiv } from './controlDiv'
import { ControlWrapper } from './ControlWrapper'

type SelectVariant =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light'
  | 'white'
  | 'black'

type SelectState = 'hovered' | 'focused' | 'active'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    AllControlHelpers {
  /**
   * You can style the select element by appending color(variant) modifiers
   */
  readonly variant?: SelectVariant
  /**
   * The shape of the select will be rounded rectangle
   */
  readonly rounded?: boolean

  readonly state?: SelectState
  readonly noControl?: true
}

export const Select: React.FC<SelectProps> = ({
  variant,
  loading,
  fullWidth,
  state,
  children,
  rounded,
  ...props
}) => {
  const divClasses: string = classNames('select', {
    [`is-${variant}`]: variant,
    'is-loading': loading,
    'is-fullwidth': fullWidth,
    'is-rounded': rounded,
    [`is-${props.ctrlSize}`]: props.ctrlSize,
  })

  const classes: string = classNamesHelper(props, { [`is-${state}`]: state })

  return (
    <ControlWrapper {...props}>
      <div className={divClasses}>
        <ControlDiv as="select" {...props} className={classes}>
          {children}
        </ControlDiv>
      </div>
    </ControlWrapper>
  )
}
