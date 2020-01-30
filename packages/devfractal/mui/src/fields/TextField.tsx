import { TextField as MuiTextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type InputFieldProps = FormikFieldConfig & TextFieldProps

export const TextField: React.FC<InputFieldProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  return <MuiTextField fullWidth={true} {...field} {...rest} />
}
