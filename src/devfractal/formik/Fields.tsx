import { ErrorMessage, ErrorMessageProps, Field, FieldConfig } from 'formik'
import React from 'react'
import {
  CheckBoxProps,
  InputProps,
  RadioGroupProps,
  SelectProps,
  TextAreaProps,
} from '../form'
import {
  FormikCheckbox,
  FormikError,
  FormikErrorProps,
  FormikInput,
  FormikRadioGroup,
  FormikSelect,
  FormikTextArea,
} from './Controls'

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

export type RadioFieldProps = RadioGroupProps & FormikFieldConfig

export const RadioGroupField: React.SFC<RadioFieldProps> = ({
  children,
  ...props
}) => (
  <Field {...props} component={FormikRadioGroup}>
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

export type ErrorMessageProps = FormikErrorProps

export const ErrorField: React.SFC<ErrorMessageProps> = props => (
  <ErrorMessage {...props} component={FormikError} />
)
