import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export type RadioProps = FormikFieldConfig & RadioGroupProps

interface RadioContextProps {
  readonly name: string
}

const RadioFieldContext: React.Context<RadioContextProps> = React.createContext(
  { name: '' },
)

export const RadioGroupField: React.FC<RadioProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  return (
    <RadioFieldContext.Provider value={{ name: props.name }}>
      <RadioGroup {...field} {...rest} />
    </RadioFieldContext.Provider>
  )
}

export const RadioItem: React.FC<any> = ({ label, ...rest }) => {
  const { name } = React.useContext(RadioFieldContext)
  return (
    <FormControlLabel control={<Radio name={name} />} label={label} {...rest} />
  )
}
