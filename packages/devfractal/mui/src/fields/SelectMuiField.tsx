import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select, { SelectProps } from '@material-ui/core/Select'
import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik'
import React from 'react'
import { FormikFieldConfig } from '../types'

type FormikSelectProps<V> = FormikFieldProps<V>

const FormikWithMuiSelect: <V>(props: FormikSelectProps<V>) => JSX.Element = ({
  form,
  field,
  ...props
}) => (
  <FormControl fullWidth={true}>
    <InputLabel htmlFor="select-simple">Select Field</InputLabel>
    <Select {...props} {...field}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
)

export type SelectFieldProps = FormikFieldConfig & SelectProps

export const SelectField: React.FC<SelectFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikWithMuiSelect}>
    {children}
  </FormikField>
)
