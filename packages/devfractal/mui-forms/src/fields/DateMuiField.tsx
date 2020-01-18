import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'
import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'
type FormikDateProps = FormikFieldProps<ParsableDate>

const DateMui: (props: FormikDateProps) => JSX.Element = ({
  form,
  field,
  ...props
}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      {...field}
      {...props}
      onChange={event => {
        form.handleChange(event)
        form.setFieldValue(field.name, event)
      }}
    />
  </MuiPickersUtilsProvider>
)

export type DateFieldProps = FormikFieldConfig & KeyboardDatePickerProps

export const DateMuiField: React.FC<DateFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={DateMui}>
    {children}
  </FormikField>
)
