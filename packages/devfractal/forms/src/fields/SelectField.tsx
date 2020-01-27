import { Select, SelectProps } from 'devfractal-ui-core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type SelectFieldProps = SelectProps & FormikFieldConfig

export const SelectField: React.FC<SelectFieldProps> = props => {
  const [field] = useField(props)
  const { validate, ...rest } = props

  return <Select {...field} {...rest} />
}
