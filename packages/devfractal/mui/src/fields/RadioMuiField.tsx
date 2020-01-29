import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

type FormikRadioProps<V> = FormikFieldProps<V>

const RadioMui: <V>(props: FormikRadioProps<V>) => JSX.Element = ({
  form,
  field,
  ...props
}) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Gender</FormLabel>
    <RadioGroup {...field} {...props}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
)

export type RadioProps = FormikFieldConfig & RadioGroupProps

export const RadioMuiField: React.FC<RadioProps> = ({ children, ...props }) => (
  <FormikField {...props} component={RadioMui}>
    {children}
  </FormikField>
)
