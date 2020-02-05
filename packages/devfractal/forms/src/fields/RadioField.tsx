import { RadioGroup, RadioGroupProps } from '@stp/ui'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

// @TODO type:'radio' must be passed to useField??

export type RadioFieldProps = RadioGroupProps & FormikFieldConfig

export const RadioGroupField: React.FC<RadioFieldProps> = props => {
  const [{ value, ...field }, , helpers] = useField(props)
  const { validate, ...rest } = props

  return (
    <RadioGroup
      {...field}
      onChange={evt => {
        console.log(evt.value)
        helpers.setValue(evt.value)
      }}
      selected={value}
      {...rest}
    />
  )
}
