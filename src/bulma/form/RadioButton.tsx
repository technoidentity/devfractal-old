import React from 'react'
import { Helpers, classNamesHelper, Div } from '../modifiers'

export interface RadiobuttonProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Helpers {}

export const RadioButton: React.SFC<RadiobuttonProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'radio')
  return (
    <label className={classes}>
      <Div as="input" {...props} type="radio" />
      {children}
    </label>
  )
}
