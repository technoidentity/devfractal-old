import {
  ErrorMessage,
  ErrorMessageProps,
  Field,
  FieldConfig,
  FormikConsumer,
} from 'formik'
import React from 'react'
import { Omit } from '../../types'
import { jsonStringify } from '../../utils'
import { CheckBoxProps } from './CheckBox'
import {
  FormikCheckbox,
  FormikError,
  FormikErrorProps,
  FormikInput,
  FormikRadioGroup,
  FormikSelect,
  FormikTextArea,
} from './Controls'
import { InputProps } from './Input'
import { RadioGroupProps } from './Radio'
import { SelectProps } from './Select'
import { TextAreaProps } from './TextArea'

export type FormikFieldConfig = Omit<FieldConfig, 'validate' | 'innerRef'>

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

export const DebugField: React.SFC = () => (
  <FormikConsumer>
    {({ values }) => <pre>{jsonStringify(values)}</pre>}
  </FormikConsumer>
)
