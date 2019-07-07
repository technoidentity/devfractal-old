import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'
import { DateInput, DateInputProps } from '../../lib'
import { OmitForm } from './types'

type DateInputInnerProps<V> = FieldProps<V> & OmitForm<DateInputProps>

function DateInputInner<V>({
  form,
  field,
  ...props
}: DateInputInnerProps<V>): JSX.Element {
  return (
    <DateInput
      {...props}
      onChange={date => form.setFieldValue(field.name, date)}
      name={field.name}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}

export type DateFieldProps = DateInputProps & FieldConfig

export const DateField: React.FC<DateFieldProps> = props => (
  <Field {...props} component={DateInputInner} />
)
