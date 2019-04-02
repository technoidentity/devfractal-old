import {
  ErrorMessage,
  ErrorMessageProps,
  Field as FormikField,
  FieldProps as FormikFieldProps,
  FormikConsumer,
} from 'formik'
import React from 'react'
import {
  CheckBox,
  CheckBoxProps,
  FieldHelp,
  FieldHelpProps,
  jsonStringify,
  Omit,
  RadioGroup,
  RadioGroupProps,
  Select,
  SelectProps,
  TextArea,
  TextAreaProps,
} from '../../lib'
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

type FormikRadioGroupProps<V> = FormikFieldProps<V> & OmitForm<RadioGroupProps>

const FormikRadioGroup: <V>(props: FormikRadioGroupProps<V>) => JSX.Element = ({
  form,
  field,
  type,
  children,
  ...props
}) => {
  return (
    <RadioGroup
      {...props}
      name={field.name}
      onBlur={field.onBlur}
      selected={field.value}
      onChange={evt => form.setFieldValue(field.name, evt.value)}
    >
      {children}
    </RadioGroup>
  )
}

export type RadioFieldProps = RadioGroupProps & FormikFieldConfig

export const RadioGroupField: React.FC<RadioFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikRadioGroup}>
    {children}
  </FormikField>
)

type FormikSelectProps<V> = FormikFieldProps<V> & OmitForm<SelectProps>

const FormikSelect: <V>(props: FormikSelectProps<V>) => JSX.Element = ({
  form,
  field,
  children,
  ...props
}) => (
  <Select {...props} {...field}>
    {children}
  </Select>
)

export type SelectFieldProps = SelectProps & FormikFieldConfig

export const SelectField: React.FC<SelectFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikSelect}>
    {children}
  </FormikField>
)

type FormikTextAreaProps<V> = FormikFieldProps<V> & OmitForm<TextAreaProps>

const FormikTextArea: <V>(props: FormikTextAreaProps<V>) => JSX.Element = ({
  form,
  field,
  ...props
}) => <TextArea {...props} {...field} />

export type TextAreaFieldProps = TextAreaProps & FormikFieldConfig

export const TextAreaField: React.FC<TextAreaFieldProps> = props => (
  <FormikField {...props} component={FormikTextArea} />
)

type FormikErrorProps = Omit<FieldHelpProps, 'variant'>

const FormikError: React.FC<FormikErrorProps> = ({ children, ...props }) => (
  <FieldHelp {...props} variant="danger">
    {children}
  </FieldHelp>
)

export type ErrorMessageProps = FormikErrorProps

export const ErrorField: React.FC<ErrorMessageProps> = props => (
  <ErrorMessage {...props} component={FormikError} />
)

export const DebugField: React.FC = () => (
  <FormikConsumer>
    {({ values }) => <pre>{jsonStringify(values)}</pre>}
  </FormikConsumer>
)
