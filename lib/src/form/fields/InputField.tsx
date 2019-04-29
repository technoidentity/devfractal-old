import { Input, InputProps, OmitForm } from 'form'
import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'

type InputInnerProps<V> = FieldProps<V> & OmitForm<InputProps>

function InputInner<V>({
  form,
  field,
  ...props
}: InputInnerProps<V>): JSX.Element {
  return <Input {...props} {...field} />
}

export type InputFieldProps = InputProps & FieldConfig

export const InputField: React.FC<InputFieldProps> = props => (
  <Field {...props} component={InputInner} />
)
