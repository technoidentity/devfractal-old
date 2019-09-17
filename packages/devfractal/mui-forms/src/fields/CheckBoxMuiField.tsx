import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

type FormikCheckboxProps<V> = FormikFieldProps<V>

const FormikMuiCheckbox: <V>(props: FormikCheckboxProps<V>) => JSX.Element = ({
  form,
  field,
  ...props
}) => <Checkbox {...field} {...props}/>

export type CheckboxFieldProps = FormikFieldConfig & CheckboxProps

export const CheckboxMuiField: React.FC<CheckboxFieldProps> = ({
  children,
  ...props
}) => (
<FormikField {...props} component={FormikMuiCheckbox}>
  {children}
</FormikField>
)
