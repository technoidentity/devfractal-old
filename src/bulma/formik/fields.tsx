import * as React from 'react'

import { Field, FieldConfig } from 'formik'

import { InputProps } from '../form/Input'
import { FormikInput, FormikCheckbox } from './controls'
import { CheckBoxProps } from '../form/CheckBox'

export type FormikFieldConfig = Pick<
  FieldConfig,
  Extract<FieldConfig, 'validate' | 'innerRef'>
>

export type InputFieldProps = InputProps & FormikFieldConfig

export const InputField: React.SFC<InputFieldProps> = props => (
  <Field name={props.name} type={props.type} component={FormikInput} />
)

export type CheckboxFieldProps = CheckBoxProps & FormikFieldConfig
export const CheckboxField: React.SFC<CheckboxFieldProps> = ({
  children,
  ...props
}) => (
  <Field name={props.name} component={FormikCheckbox}>
    {children}
  </Field>
)
