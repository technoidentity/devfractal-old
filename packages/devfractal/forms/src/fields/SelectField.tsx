import { Select, SelectProps } from '@stp/ui-core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type SelectFieldProps = SelectProps &
  FormikFieldConfig & { readonly multiple?: boolean }

export const SelectField: React.FC<SelectFieldProps> = props => {
  const [field] = useField(props)
  const { validate, ...rest } = props

  return <Select {...field} {...rest} />
}
