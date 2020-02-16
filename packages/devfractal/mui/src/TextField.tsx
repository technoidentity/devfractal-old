import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export type TextFieldProps = FormikFieldConfig & MuiTextFieldProps

export const TextField: React.FC<TextFieldProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  return <MuiTextField fullWidth={true} {...field} {...rest} />
}
