import * as React from 'react'

import { FieldProps } from 'formik'

import { Input } from '../form'

export const FormikInput: <V = any>(props: FieldProps<V>) => JSX.Element = ({
  form,
  field,
  ...props
}) => <Input type="text" {...field} {...props} />
