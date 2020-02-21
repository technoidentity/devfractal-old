import { Checkbox, CheckboxProps } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export type CheckboxFieldProps = FormikFieldConfig & CheckboxProps

export const CheckboxField: React.FC<CheckboxFieldProps> = props => {
  const [field] = useField({ type: 'checkbox', ...(props as any) })
  const { validate, ...rest } = props

  return <Checkbox {...field} {...rest} />
}
