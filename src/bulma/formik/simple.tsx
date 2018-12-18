import * as React from 'react'

import { ErrorMessage } from 'formik'

import { Label, Button, Field as BulmaField } from '../form'
import { InputField, InputFieldProps } from './fields'

export interface SimpleInputProps extends InputFieldProps {
  readonly label: string
  readonly name: string
}

export const SimpleInput: React.SFC<SimpleInputProps> = ({
  label,
  ...props
}) => (
  <>
    <Label>{label}</Label>
    <InputField {...props} />
    <ErrorMessage name={props.name} className="field-error" />
  </>
)

export interface SimpleFormButtonsProps {
  handleReset(): void
}

// Take handleReset from context
export const SimpleFormButtons: React.SFC<SimpleFormButtonsProps> = ({
  handleReset,
}) => (
  <BulmaField groupModifier="grouped-right">
    <Button type="submit" variant="info">
      Submit
    </Button>
    <Button variant="info" type="button" onClick={handleReset}>
      Reset
    </Button>
  </BulmaField>
)
