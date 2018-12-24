import React from 'react'
import { Field, FieldProps } from './Field'
import { FieldHelp, HelpType } from './FieldHelp'
import { Label, LabelSize } from './Label'

export interface FormFieldProps extends FieldProps {
  readonly label?: string
  readonly labelSize?: LabelSize
  readonly helpType?: HelpType
  readonly helpText?: string
}

export const FormField: React.SFC<FormFieldProps> = ({
  label,
  labelSize,
  helpType,
  helpText,
  children,
  ...props
}) => (
  <Field {...props}>
    <Label size={labelSize} />
    {children}
    <FieldHelp variant={helpType}>{helpText}</FieldHelp>
  </Field>
)
