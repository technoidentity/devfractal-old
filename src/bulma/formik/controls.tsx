import * as React from 'react'

import { FieldProps } from 'formik'

import { Input } from '../form'

export function FormikInput<V = any>({
  form,
  field,
  ...props
}: FieldProps<V>): JSX.Element {
  return <Input type="text" {...field} {...props} />
}
