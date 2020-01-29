import { Switch } from '@material-ui/core'
import { SwitchProps } from '@material-ui/core/Switch'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

export type SwitchFieldProps = FormikFieldConfig & SwitchProps

export const SwitchMuiField: React.FC<SwitchFieldProps> = props => {
  const [field] = useField(props as any)
  const { validate, ...rest } = props

  return <Switch {...field} {...rest} />
}
