import React from 'react'

interface RadioProps {
  readonly name: string
  readonly value?: string
  readonly onChange: React.ChangeEventHandler<HTMLInputElement>
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly children: React.ReactChild
}

export const RadioButton: React.SFC<RadioProps> = ({
  name,
  value,
  onChange,
  checked,
  disabled,
  children,
}) => (
  <div className="control">
    <label className="radio">
      <input
        type="radio"
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
