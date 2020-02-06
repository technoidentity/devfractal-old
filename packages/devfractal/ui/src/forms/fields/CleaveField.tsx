import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'
import { CleaveInput, CleaveInputProps } from '../components'
import { OmitForm } from '../types'

type CleaveInputInnerProps = FieldProps<CleaveInputProps['value']> &
  OmitForm<CleaveInputProps>

function CleaveInputInner({
  form,
  field,
  ...props
}: CleaveInputInnerProps): JSX.Element {
  return (
    <CleaveInput
      {...props}
      onChange={evt => form.setFieldValue(field.name, evt.currentTarget.value)}
      name={field.name}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}

export type CleaveInputFieldProps = CleaveInputProps & FieldConfig

export const CleaveInputField: React.FC<CleaveInputFieldProps> = props => (
  <Field {...props} component={CleaveInputInner} />
)
