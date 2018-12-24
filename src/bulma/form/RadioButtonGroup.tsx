import React from 'react'
import { AllControlHelpers } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

export interface RadioButtonGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    AllControlHelpers {}

export const RadioButtonGroup: React.SFC<RadioButtonGroupProps> = ({
  children,
  ...props
}) => {
  return <ControlWrapper {...props}>{children}</ControlWrapper>
}
