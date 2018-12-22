import * as React from 'react'

import { FieldProps } from 'formik'

import { Input } from '../form'
import { CheckBox } from '../form'
import { InputProps } from '../form/Input'
import { Omit } from '../modifiers/commonHelpers'
import { CheckBoxProps } from '../form/CheckBox'

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
