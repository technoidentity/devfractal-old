import { Switch } from '@material-ui/core'
import { SwitchProps } from '@material-ui/core/Switch'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

type FormikSwitchProps<V> = FormikFieldProps<V>

const SwitchMuiCheckbox: <V>(props: FormikSwitchProps<V>) => JSX.Element = ({
  form,
  field,
  ...props
}) => <Switch {...field} {...props} />

export type SwitchFieldProps = FormikFieldConfig & SwitchProps

export const SwitchMuiField: React.FC<SwitchFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={SwitchMuiCheckbox}>
    {children}
  </FormikField>
)
