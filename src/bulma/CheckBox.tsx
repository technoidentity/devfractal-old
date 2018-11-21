import React from 'react'

interface CheckBoxProps {
  readonly name: string
  readonly value?: string
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly children: React.ReactChild
}

export const CheckBox: React.SFC<CheckBoxProps> = ({
  name,
  value,
  onChange,
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
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      {children}
    </label>
  </div>
)
