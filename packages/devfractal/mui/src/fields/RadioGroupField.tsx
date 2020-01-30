import { RadioGroup } from '@material-ui/core'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type RadioProps = FormikFieldConfig & RadioGroupProps

export const RadioGroupField: React.FC<RadioProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  return <RadioGroup {...field} {...rest} />
}
