import { useField } from 'formik'
import React from 'react'
import { Select, SelectProps } from '../../core'
import { FormikFieldConfig } from '../types'

export type SelectFieldProps = SelectProps &
  FormikFieldConfig & { readonly multiple?: boolean }

export const SelectField: React.FC<SelectFieldProps> = props => {
  const [field] = useField(props)
  const { validate, ...rest } = props

  return <Select {...field} {...rest} />
}
