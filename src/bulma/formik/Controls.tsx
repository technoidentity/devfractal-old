import { FieldProps } from 'formik'
import React from 'react'
import { Omit } from '../../types'
import {
  CheckBox,
  CheckBoxProps,
  Input,
  InputProps,
  RadioButton,
  RadioButtonProps,
  Select,
  SelectProps,
  TextArea,
  TextAreaProps,
} from '../form'

interface FormikInputProps<V> extends FieldProps<V>, Omit<InputProps, 'form'> {}

export const FormikInput: <V = unknown>(
  props: FormikInputProps<V>,
) => JSX.Element = ({ form, field, ...props }) => (
  <Input type="text" {...field} {...props} />
)

interface FormikCheckboxProps<V>
  extends FieldProps<V>,
    Omit<CheckBoxProps, 'form'> {}

export const FormikCheckbox: <V = unknown>(
  props: FormikCheckboxProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <CheckBox {...field} {...props}>
    {children}
  </CheckBox>
)

interface FormikRadioButtonProps<V>
  extends FieldProps<V>,
    Omit<RadioButtonProps, 'form'> {}

export const FormikRadioButton: <V = unknown>(
  props: FormikRadioButtonProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => {
  return (
    <RadioButton {...field} {...props}>
      {children}
    </RadioButton>
  )
}

interface FormikSelectProps<V>
  extends FieldProps<V>,
    Omit<SelectProps, 'form'> {}

export const FormikSelect: <V = unknown>(
  props: FormikSelectProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <Select {...field} {...props}>
    {children}
  </Select>
)

interface FormikTextAreaProps<V>
  extends FieldProps<V>,
    Omit<TextAreaProps, 'form'> {}

export const FormikTextArea: <V = unknown>(
  props: FormikTextAreaProps<V>,
) => JSX.Element = ({ form, field, ...props }) => (
  <TextArea {...field} {...props} />
)
