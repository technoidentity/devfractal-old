import {
  ErrorMessage,
  ErrorMessageProps,
  Field as FormikField,
  FieldConfig,
  FormikConsumer,
} from 'formik'
import React from 'react'
import { Omit } from '../../types'
import { jsonStringify } from '../lib'
import {
  CheckBoxProps,
  FormikCheckbox,
  FormikError,
  FormikErrorProps,
  FormikInput,
  FormikRadioGroup,
  FormikSelect,
  FormikTextArea,
  InputProps,
  RadioGroupProps,
  SelectProps,
  TextAreaProps,
} from './internal'

export type FormikFieldConfig = Omit<FieldConfig, 'innerRef'>

export type InputFieldProps = InputProps & FormikFieldConfig

export const InputField: React.SFC<InputFieldProps> = props => (
  <FormikField {...props} component={FormikInput} />
)

export type CheckboxFieldProps = CheckBoxProps & FormikFieldConfig

export const CheckboxField: React.SFC<CheckboxFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikCheckbox}>
    {children}
  </FormikField>
)

export type RadioFieldProps = RadioGroupProps & FormikFieldConfig

export const RadioGroupField: React.SFC<RadioFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikRadioGroup}>
    {children}
  </FormikField>
)

export type SelectFieldProps = SelectProps & FormikFieldConfig

export const SelectField: React.SFC<SelectFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikSelect}>
    {children}
  </FormikField>
)

export type TextAreaFieldProps = TextAreaProps & FormikFieldConfig

export const TextAreaField: React.SFC<TextAreaFieldProps> = props => (
  <FormikField {...props} component={FormikTextArea} />
)

export type ErrorMessageProps = FormikErrorProps

export const ErrorField: React.SFC<ErrorMessageProps> = props => (
  <ErrorMessage {...props} component={FormikError} />
)

export const DebugField: React.SFC = () => (
  <FormikConsumer>
    {({ values }) => <pre>{jsonStringify(values)}</pre>}
  </FormikConsumer>
)
