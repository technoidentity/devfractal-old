import { FormControlLabel, FormControlLabelProps } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { useField } from 'formik'
import React from 'react'
import { FormikFieldConfig } from './types'

export interface CheckboxControlFieldProps
  extends Omit<FormikFieldConfig, 'onChange'>,
    Omit<FormControlLabelProps, 'name' | 'control' | 'onChange'> {
  readonly onChange?: FormControlLabelProps['onChange']
}

export const CheckboxControlField: React.FC<CheckboxControlFieldProps> = props => {
  const [field] = useField({ type: 'checkbox', ...(props as any) })
  const { validate, ...rest } = props

  return <FormControlLabel control={<Checkbox {...field} />} {...rest} />
}
