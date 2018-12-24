import React from 'react'

import { FieldProps, Field } from './Field'
import { LabelSize, Label } from './Label'
import { HelpType, FieldHelp } from './FieldHelp'

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
