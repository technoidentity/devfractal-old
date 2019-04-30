import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { CheckBox, CheckBoxProps } from '../CheckBox'
import { FormikFieldConfig, OmitForm } from './types'

type FormikCheckboxProps<V> = FormikFieldProps<V> & OmitForm<CheckBoxProps>

const FormikCheckbox: <V>(props: FormikCheckboxProps<V>) => JSX.Element = ({
  form,
  field,
  children,
  ...props
}) => (
  <CheckBox {...props} {...field} checked={field.value}>
    {children}
  </CheckBox>
)

export type CheckboxFieldProps = CheckBoxProps & FormikFieldConfig

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikCheckbox}>
    {children}
  </FormikField>
)
