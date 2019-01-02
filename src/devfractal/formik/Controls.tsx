import { FieldProps } from 'formik'
import React from 'react'
import { Omit } from '../../types'
import {
  CheckBox,
  CheckBoxProps,
  FieldHelp,
  FieldHelpProps,
  Input,
  InputProps,
  RadioGroup,
  RadioGroupProps,
  Select,
  SelectProps,
  TextArea,
  TextAreaProps,
} from '../form'

type OmitForm<T> = Omit<T, 'form'>

interface FormikInputProps<V> extends FieldProps<V>, OmitForm<InputProps> {}

export const FormikInput: <V = unknown>(
  props: FormikInputProps<V>,
) => JSX.Element = ({ form, field, ...props }) => (
  <Input {...props} {...field} />
)

interface FormikCheckboxProps<V>
  extends FieldProps<V>,
    OmitForm<CheckBoxProps> {}

export const FormikCheckbox: <V = unknown>(
  props: FormikCheckboxProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <CheckBox {...props} {...field} checked={field.value}>
    {children}
  </CheckBox>
)

interface FormikRadioGroupProps<V>
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
      onChange={evt => form.setFieldValue(field.name, evt.target.value)}
    >
      {children}
    </RadioGroup>
  )
}

interface FormikSelectProps<V> extends FieldProps<V>, OmitForm<SelectProps> {}

export const FormikSelect: <V = unknown>(
  props: FormikSelectProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <Select {...props} {...field}>
    {children}
  </Select>
)

interface FormikTextAreaProps<V>
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
