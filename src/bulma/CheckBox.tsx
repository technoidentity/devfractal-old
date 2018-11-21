import React from 'react'

interface CheckBoxProps {
  readonly name: string
  readonly value?: string
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly children: React.ReactChild
}

export const CheckBox: React.SFC<CheckBoxProps> = ({
  name,
  value,
  checked,
  disabled,
  children,
}) => (
  <div className="control">
    <label className="checkbox">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
      />
      {children}
    </label>
  </div>
)
