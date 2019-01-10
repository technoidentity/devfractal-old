import { FieldProps } from 'formik'
import React from 'react'
import { Omit } from '../../types'
import { CheckBox, CheckBoxProps } from './CheckBox'
import { FieldHelp, FieldHelpProps } from './Field'
import { Input, InputProps } from './Input'
import { RadioGroup, RadioGroupProps } from './Radio'
import { Select, SelectProps } from './Select'
import { TextArea, TextAreaProps } from './TextArea'

type OmitForm<T> = Omit<T, 'form'>

export interface FormikInputProps<V>
  extends FieldProps<V>,
    OmitForm<InputProps> {}

export const FormikInput: <V = unknown>(
  props: FormikInputProps<V>,
) => JSX.Element = ({ form, field, ...props }) => (
  <Input {...props} {...field} />
)

export interface FormikCheckboxProps<V>
  extends FieldProps<V>,
    OmitForm<CheckBoxProps> {}

export const FormikCheckbox: <V = unknown>(
  props: FormikCheckboxProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <CheckBox {...props} {...field} checked={field.value}>
    {children}
  </CheckBox>
)

export interface FormikRadioGroupProps<V>
  extends FieldProps<V>,
    OmitForm<RadioGroupProps> {}

export const FormikRadioGroup: <V = unknown>(
  props: FormikRadioGroupProps<V>,
) => JSX.Element = ({ form, field, type, children, ...props }) => {
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

export interface FormikSelectProps<V>
  extends FieldProps<V>,
    OmitForm<SelectProps> {}

export const FormikSelect: <V = unknown>(
  props: FormikSelectProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <Select {...props} {...field}>
    {children}
  </Select>
)

export interface FormikTextAreaProps<V>
  extends FieldProps<V>,
    OmitForm<TextAreaProps> {}

export const FormikTextArea: <V = unknown>(
  props: FormikTextAreaProps<V>,
) => JSX.Element = ({ form, field, ...props }) => (
  <TextArea {...props} {...field} />
)

export type FormikErrorProps = Omit<FieldHelpProps, 'variant'>

export const FormikError: React.SFC<FormikErrorProps> = ({
  children,
  ...props
}) => (
  <FieldHelp {...props} variant="danger">
    {children}
  </FieldHelp>
)
