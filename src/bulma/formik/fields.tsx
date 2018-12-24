import { Field, FieldConfig } from 'formik'
import React from 'react'
import {
  CheckBoxProps,
  InputProps,
  RadioButtonProps,
  SelectProps,
  TextAreaProps,
} from '../form'
import {
  FormikCheckbox,
  FormikInput,
  FormikRadioButton,
  FormikSelect,
  FormikTextArea,
} from './controls'

export type FormikFieldConfig = Pick<
  FieldConfig,
  Extract<FieldConfig, 'validate' | 'innerRef'>
>

export type InputFieldProps = InputProps & FormikFieldConfig

export const InputField: React.SFC<InputFieldProps> = props => (
  <Field {...props} component={FormikInput} />
)

export type CheckboxFieldProps = CheckBoxProps & FormikFieldConfig
export const CheckboxField: React.SFC<CheckboxFieldProps> = ({
  children,
  ...props
}) => (
  <Field {...props} component={FormikCheckbox}>
    {children}
  </Field>
)

export type RadioButtonFieldProps = RadioButtonProps & FormikFieldConfig

export const RadioButtonField: React.SFC<RadioButtonFieldProps> = ({
  children,
  ...props
}) => (
  <Field {...props} component={FormikRadioButton}>
    {children}
  </Field>
)

export type SelectFieldProps = SelectProps & FormikFieldConfig

export const SelectField: React.SFC<SelectFieldProps> = ({
  children,
  ...props
}) => (
  <Field {...props} component={FormikSelect}>
    {children}
  </Field>
)

export type TextAreaFieldProps = TextAreaProps & FormikFieldConfig

export const TextAreaField: React.SFC<TextAreaFieldProps> = props => (
  <Field {...props} component={FormikTextArea} />
)
