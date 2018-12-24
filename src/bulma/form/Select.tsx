import classNames from 'classnames'
import React from 'react'
import { classNamesHelper } from '../modifiers'
import { AllControlHelpers, ControlDiv } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

type SelectVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type SelectSize = 'small' | 'medium' | 'large'

type SelectState = 'hovered' | 'focused'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    AllControlHelpers {
  readonly variant?: SelectVariant
  readonly rounded?: boolean
  readonly selectSize?: SelectSize
  readonly state?: SelectState
  readonly loading?: boolean
  readonly noControl?: true
}

export const Select: React.SFC<SelectProps> = ({
  fullWidth,
  noControl,
  variant,
  selectSize,
  state,
  children,
  rounded,
  loading,
  ...props
}) => {
  const divClasses: string = classNames('select', {
    [`is-${variant}`]: variant,
    [`is-rounded`]: rounded,
    [`is-${selectSize}`]: selectSize,
    ['is-loading']: loading,
    ['is-fullwidth']: fullWidth,
  })

  const classes: string = classNamesHelper({ [`is-${state}`]: state })

  return (
    <ControlWrapper {...props}>
      <div className={divClasses}>
        <ControlDiv as="select" className={classes}>
          {children}
        </ControlDiv>
      </div>
    </ControlWrapper>
  )
}
