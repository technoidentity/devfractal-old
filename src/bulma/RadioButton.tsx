import React from 'react'

interface RadioProps {
  readonly name: string
  readonly value?: string
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly children: React.ReactChild
}

export const RadioButton: React.SFC<RadioProps> = ({
  name,
  value,
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
        checked={checked}
        disabled={disabled}
      />
      {children}
    </label>
  </div>
)
