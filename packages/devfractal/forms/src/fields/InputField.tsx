import { Input, InputProps } from '@stp/ui-core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type InputFieldProps = InputProps & FormikFieldConfig

export const InputField: React.FC<InputFieldProps> = props => {
  const [field] = useField(props)
  const { validate, ...rest } = props

  return <Input {...field} {...rest} />
}
