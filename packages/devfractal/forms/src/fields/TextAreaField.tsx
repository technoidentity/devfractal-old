import { TextArea, TextAreaProps } from '@stp/ui-core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type TextAreaFieldProps = TextAreaProps & FormikFieldConfig

export const TextAreaField: React.FC<TextAreaFieldProps> = props => {
  const [field] = useField(props)
  const { validate, ...rest } = props

  return <TextArea {...field} {...rest} />
}
