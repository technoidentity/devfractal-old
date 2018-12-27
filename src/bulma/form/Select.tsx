import React from 'react'
import { classNames } from '../../utils/classNames'
import { classNamesHelper } from '../modifiers'
import { AllControlHelpers, ControlDiv } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

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
  readonly variant?: SelectVariant
  readonly rounded?: boolean
  readonly state?: SelectState
  readonly noControl?: true
}

export const Select: React.SFC<SelectProps> = ({
  noControl,
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
    [`is-loading`]: loading,
    [`is-fullwidth`]: fullWidth,
    [`is-rounded`]: rounded,
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
