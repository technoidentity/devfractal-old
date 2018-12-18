import * as React from 'react'

import { Field } from 'formik'

import { InputProps } from '../form/Input'
import { FormikInput } from './controls'

export type InputFieldProps = InputProps

export const InputField: React.SFC<InputFieldProps> = props => (
  <Field name={props.name} type={props.type} component={FormikInput} />
)
