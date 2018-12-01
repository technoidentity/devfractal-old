import React from 'react'

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly readOnly?: boolean
}

export const CheckBox: React.SFC<CheckBoxProps> = ({ children, ...props }) => (
  <div className="control">
    <label className="checkbox">
      <input {...props} type="checkbox" />
      {children}
    </label>
  </div>
)
