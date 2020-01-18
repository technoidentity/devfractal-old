import { Input, InputProps } from 'devfractal-ui-core'
import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'
import { OmitForm } from '../types'

type InputInnerProps = FieldProps<InputProps['value']> & OmitForm<InputProps>

function InputInner({ form, field, ...props }: InputInnerProps): JSX.Element {
  return <Input {...props} {...field} />
}

export type InputFieldProps = InputProps & FieldConfig

export const InputField: React.FC<InputFieldProps> = props => (
  <Field {...props} component={InputInner} />
)
