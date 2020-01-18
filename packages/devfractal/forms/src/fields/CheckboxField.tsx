import { CheckBox, CheckBoxProps } from 'devfractal-ui-core'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig, OmitForm } from '../types'

type FormikCheckboxProps<V> = FormikFieldProps<V> & OmitForm<CheckBoxProps>

const FormikCheckbox: (props: FormikCheckboxProps<boolean>) => JSX.Element = ({
  form,
  field: { value, ...field },
  children,
  ...props
}) => (
  <CheckBox {...props} {...field} checked={value}>
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
