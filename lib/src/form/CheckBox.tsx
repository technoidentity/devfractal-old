import React from 'react'
import { classNamesHelper } from '../index'
import { AllControlHelpers, ControlDiv, ControlWrapper } from '../index'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {}

export const CheckBox: React.FC<CheckBoxProps> = ({ children, ...props }) => (
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
