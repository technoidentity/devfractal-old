import Select, { SelectProps } from '@material-ui/core/Select'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export type SelectFieldProps = FormikFieldConfig & SelectProps

export const SelectField: React.FC<SelectFieldProps> = props => {
  const [field] = useField({ as: 'select', ...(props as any) })
  const { validate, ...rest } = props

  return <Select {...field} {...rest} />
}