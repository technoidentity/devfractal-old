import { CheckBox, CheckBoxProps } from 'devfractal-ui-core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type CheckboxFieldProps = CheckBoxProps &
  Pick<FormikFieldConfig, 'name' | 'validate'>

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  form,
  children,
  ...props
}) => {
  const [{ value, ...field }] = useField(props)

  return (
    <CheckBox {...props} {...field} checked={value}>
      {children}
    </CheckBox>
  )
}
