import { useField } from 'formik'
import React from 'react'
import { TextArea, TextAreaProps } from '../../core'
import { FormikFieldConfig } from '../types'

export type TextAreaFieldProps = TextAreaProps & FormikFieldConfig

export const TextAreaField: React.FC<TextAreaFieldProps> = props => {
  const [field] = useField(props)
  const { validate, ...rest } = props

  return <TextArea {...field} {...rest} />
}
