import React from 'react'

import { classNamesHelper } from '../modifiers'
import { AllControlHelpers, ControlDiv } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {}

export const CheckBox: React.SFC<CheckBoxProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'checkbox')

  return (
    <ControlWrapper {...props}>
      <label className="checkbox">
        <ControlDiv {...props} type="checkbox" className={classes} />
        {children}
      </label>
    </ControlWrapper>
  )
}
