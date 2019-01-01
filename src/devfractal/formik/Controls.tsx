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

interface FormikRadioGroupProps<V>
  extends FieldProps<V>,
    Omit<RadioGroupProps, 'form'> {}

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

export type FormikErrorProps = Omit<FieldHelpProps, 'variant'>

export const FormikError: React.SFC<FormikErrorProps> = ({
  children,
  ...props
}) => (
  <FieldHelp variant="danger" {...props}>
    {children}
  </FieldHelp>
)
