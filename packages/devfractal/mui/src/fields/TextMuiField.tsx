import { TextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type InputFieldProps = FormikFieldConfig & TextFieldProps

export const TextMuiField: React.FC<InputFieldProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  return <TextField fullWidth={true} {...field} {...rest} />
}
