import { CheckBox, CheckBoxProps } from 'devfractal-ui-core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type CheckboxFieldProps = CheckBoxProps & FormikFieldConfig

export const CheckboxField: React.FC<CheckboxFieldProps> = props => {
  const [field] = useField({ type: 'checkbox', ...props })
  const { validate, ...rest } = props

  return <CheckBox {...field} {...rest} />
}
