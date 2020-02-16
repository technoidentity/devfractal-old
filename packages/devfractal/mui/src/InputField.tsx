import {
  Input as MuiInput,
  InputProps as MuiInputProps,
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export type InputFieldProps = FormikFieldConfig & MuiInputProps

export const InputField: React.FC<InputFieldProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  //@TODO: allow fullWidth to be passed
  return <MuiInput fullWidth={true} {...field} {...rest} />
}
