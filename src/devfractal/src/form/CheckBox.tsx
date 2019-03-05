import React from 'react'
import { classNamesHelper } from '../lib'
import { AllControlHelpers, ControlDiv, ControlWrapper } from './internal'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {}

export const CheckBox: React.FunctionComponent<CheckBoxProps> = ({
  children,
  ...props
}) => (
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
