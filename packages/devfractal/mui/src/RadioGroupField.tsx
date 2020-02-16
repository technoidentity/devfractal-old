import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  RadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  RadioProps as MuiRadioProps,
} from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export type RadioGroupFieldProps = FormikFieldConfig & MuiRadioGroupProps

interface RadioContext {
  readonly name: string
}

const RadioFieldContext: React.Context<RadioContext> = React.createContext(
  undefined as any,
)

export const RadioGroupField: React.FC<RadioGroupFieldProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  return (
    <RadioFieldContext.Provider value={{ name: props.name }}>
      <RadioGroup {...field} {...rest} />
    </RadioFieldContext.Provider>
  )
}

export type RadioItemProps = Omit<FormControlLabelProps, 'control'> &
  MuiRadioProps

export const RadioItem: React.FC<RadioItemProps> = props => {
  const { name } = React.useContext(RadioFieldContext)
  return <FormControlLabel control={<Radio name={name} />} {...props} />
}
