import * as React from 'react'

import { FieldProps } from 'formik'

import { Input } from '../form'
import { CheckBox } from '../form'
import { InputProps } from '../form/Input'
import { CheckBoxProps } from '../form/CheckBox'
import { SelectProps, Select } from '../form/Select'
import { TextAreaProps, TextArea } from '../form/TextArea'
import { RadioButton, RadiobuttonProps } from '../form/RadioButton'
import { Omit } from '../../types'

interface FormikInputProps<V> extends FieldProps<V>, Omit<InputProps, 'form'> {}

export const FormikInput: <V = any>(
  props: FormikInputProps<V>,
) => JSX.Element = ({ form, field, ...props }) => (
  <Input type="text" {...field} {...props} />
)

interface FormikCheckboxProps<V>
  extends FieldProps<V>,
    Omit<CheckBoxProps, 'form'> {}

export const FormikCheckbox: <V = any>(
  props: FormikCheckboxProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <CheckBox {...field} {...props}>
    {children}
  </CheckBox>
)

interface FormikRadioButtonProps<V>
  extends FieldProps<V>,
    Omit<RadiobuttonProps, 'form'> {}

export const FormikRadioButton: <V = any>(
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

export const FormikSelect: <V = any>(
  props: FormikSelectProps<V>,
) => JSX.Element = ({ form, field, children, ...props }) => (
  <Select {...field} {...props}>
    {children}
  </Select>
)

interface FormikTextAreaProps<V>
  extends FieldProps<V>,
    Omit<TextAreaProps, 'form'> {}

export const FormikTextArea: <V = any>(
  props: FormikTextAreaProps<V>,
) => JSX.Element = ({ form, field, ...props }) => (
  <TextArea {...field} {...props} />
)
