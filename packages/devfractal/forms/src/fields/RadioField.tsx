import { RadioGroup, RadioGroupProps } from 'devfractal-ui-core'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig, OmitForm } from '../types'

type FormikRadioGroupProps = FormikFieldProps<RadioGroupProps['selected']> &
  OmitForm<RadioGroupProps>

const FormikRadioGroup: (props: FormikRadioGroupProps) => JSX.Element = ({
  form,
  field,
  type,
  children,
  ...props
}) => (
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

export type RadioFieldProps = RadioGroupProps & FormikFieldConfig

export const RadioGroupField: React.FC<RadioFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikRadioGroup}>
    {children}
  </FormikField>
)
