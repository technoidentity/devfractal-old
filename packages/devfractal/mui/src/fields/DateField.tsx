import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from '@material-ui/pickers'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export interface DateFieldProps
  extends FormikFieldConfig,
    Omit<KeyboardDatePickerProps, 'name' | 'onChange' | 'value'> {
  readonly onChange?: KeyboardDatePickerProps['onChange']
  readonly value?: KeyboardDatePickerProps['value']
}

export const DateField: React.FC<DateFieldProps> = ({ children, ...props }) => {
  const [field, { touched, error }, helpers] = useField(props as any)
  const { validate, ...rest } = props

  return (
    <KeyboardDatePicker
      error={touched && error !== undefined}
      {...field}
      {...rest}
      onChange={date => {
        helpers.setValue(date)
      }}
    />
  )
}
