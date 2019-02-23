import React from 'react'
import { classNamesHelper } from '../internal'
import { AllControlHelpers, ControlDiv, ControlWrapper } from './internal'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {}

export const CheckBox: React.SFC<CheckBoxProps> = ({ children, ...props }) => (
  <ControlWrapper {...props}>
    <label className="checkbox">
      <ControlDiv
        {...props}
        type="checkbox"
        className={classNamesHelper(props, 'checkbox')}
      />
      {children}
    </label>
  </ControlWrapper>
)
