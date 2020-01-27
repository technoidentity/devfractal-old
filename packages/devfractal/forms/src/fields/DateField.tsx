import { useField } from 'formik'
import React from 'react'
import { DateInput, DateInputProps } from '../components'
import { FormikFieldConfig } from '../types'

export type DateFieldProps = Omit<DateInputProps, 'onChange'> &
  FormikFieldConfig & { readonly onChange?: DateInputProps['onChange'] }

export const DateField: React.FC<DateFieldProps> = props => {
  const [field, , helpers] = useField(props)
  const { validate, ...rest } = props
  return (
    <DateInput
      name={field.name}
      onBlur={field.onBlur}
      selected={field.value}
      onChange={date => helpers.setValue(date)}
      {...rest}
    />
  )
}
