import { TextArea, TextAreaProps } from 'devfractal-ui-core'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig, OmitForm } from '../types'

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
