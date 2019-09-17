import { TextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField'
import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'

type InputInnerProps<V> = FieldProps<V>

function FormikMuiText<V>({
  form,
  field,
  ...props
}: InputInnerProps<V>): JSX.Element {
  return <TextField label="Name" fullWidth={true} {...props} {...field} />
}

export type InputFieldProps = FieldConfig & TextFieldProps

export const TextMuiField: React.FC<InputFieldProps> = props => (
  <Field {...props} component={FormikMuiText} />
)
