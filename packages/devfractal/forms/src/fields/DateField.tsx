import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'
import { DateInput, DateInputProps } from '../components'
import { OmitForm } from '../types'

type DateInputInnerProps = FieldProps<DateInputProps['selected']> &
  OmitForm<DateInputProps>

function DateInputInner({
  form,
  field,
  ...props
}: DateInputInnerProps): JSX.Element {
  return (
    <DateInput
      {...props}
      onChange={date => form.setFieldValue(field.name, date)}
      name={field.name}
      onBlur={field.onBlur}
      selected={field.value}
    />
  )
}

export type DateFieldProps = {
  readonly onChange?: DateInputProps['onChange']
} & Omit<DateInputProps, 'onChange'> &
  FieldConfig

export const DateField: React.FC<DateFieldProps> = props => (
  <Field {...props} component={DateInputInner} />
)
