import React from 'react'
import {
  AllControlHelpers,
  classNamesHelper,
  ControlDiv,
  ControlWrapper,
} from '../lib'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {}

export const CheckBox: React.FC<CheckBoxProps> = ({ children, ...props }) => (
  <ControlWrapper {...props}>
    <label className="checkbox">
      {children}
      <ControlDiv
        {...props}
        type="checkbox"
        className={classNamesHelper(props, 'checkbox')}
      />
    </label>
  </ControlWrapper>
)

// tslint:disable no-default-export
export default CheckBox
