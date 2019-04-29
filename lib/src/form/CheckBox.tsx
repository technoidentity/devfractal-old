import { classNamesHelper } from 'base'
import { AllControlHelpers, ControlDiv, ControlWrapper } from 'form'
import React from 'react'

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

// tslint:disable no-default-export
export default CheckBox
