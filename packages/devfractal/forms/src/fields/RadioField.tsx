import { RadioGroup, RadioGroupProps } from 'devfractal-ui-core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

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
