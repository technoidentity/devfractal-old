import { FormikFieldConfig, OmitForm, RadioGroup, RadioGroupProps } from 'form'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'

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
