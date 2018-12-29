import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'
import { AllControlHelpers } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Helpers {}

export const RadioButton: React.SFC<RadioButtonProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'radio')
  return (
    <label className={classes}>
      <Div as="input" {...props} type="radio" />
      {children}
    </label>
  )
}

export interface RadioButtonGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    AllControlHelpers {}

export const RadioButtonGroup: React.SFC<RadioButtonGroupProps> = ({
  children,
  ...props
}) => {
  return <ControlWrapper {...props}>{children}</ControlWrapper>
}
