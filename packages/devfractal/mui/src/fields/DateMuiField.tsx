import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type DateFieldProps = FormikFieldConfig & KeyboardDatePickerProps

export const DateMuiField: React.FC<DateFieldProps> = ({
  children,
  ...props
}) => {
  const [field, , helpers] = useField(props as any)
  const { validate, ...rest } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...field}
        {...rest}
        onChange={date => {
          helpers.setValue(date)
        }}
      />
    </MuiPickersUtilsProvider>
  )
}
