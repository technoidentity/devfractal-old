import React from 'react'
import { classNamesHelper, Div, Helpers } from '..'
import { Label, LabelSize } from './internal'

type FieldGroupModifier = 'grouped-centered' | 'grouped-right'

type FieldAddonModifier = 'addons-centered' | 'addons-right'

type FieldSize = 'narrow' | 'expanded'

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly grouped?: boolean
  readonly addons?: boolean
  readonly horizontal?: boolean
  readonly groupedMultiline?: boolean
  readonly size?: FieldSize
  readonly groupModifier?: FieldGroupModifier
  readonly addonsModifier?: FieldAddonModifier
}

export const Field: React.FC<FieldProps> = ({
  grouped,
  addons,
  horizontal,
  groupedMultiline,
  groupModifier,
  size,
  addonsModifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'field', {
    'is-grouped': grouped || groupedMultiline || groupModifier,
    'is-horizontal': horizontal,
    'has-addons': addons || addonsModifier,
    [`is-${size}`]: size,
    'is-grouped-multiline': groupedMultiline,
    [`is-${groupModifier}`]: groupModifier,
    [`has-${addonsModifier}`]: addonsModifier,
  })

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface FieldBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const FieldBody: React.FC<FieldBodyProps> = ({ children, ...props }) => (
  <Div {...props} className={classNamesHelper(props, 'field-body')}>
    {children}
  </Div>
)

export type FieldHelpType =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export interface FieldHelpProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    Helpers {
  readonly variant?: FieldHelpType
}

export const FieldHelp: React.FC<FieldHelpProps> = ({
  variant,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'help', {
    [`is-${variant}`]: variant,
  })

  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

type FieldLabelSize = 'small' | 'normal' | 'medium' | 'large'

export interface FieldLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly fieldLabelSize?: FieldLabelSize
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  fieldLabelSize,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'field-label', {
    [`is-${fieldLabelSize}`]: fieldLabelSize,
  })
  return (
    <Div {...props} className={classes}>
      <Label>{children}</Label>
    </Div>
  )
}

export interface FormFieldProps extends FieldProps {
  readonly label?: string
  readonly labelSize?: LabelSize
  readonly helpType?: FieldHelpType
  readonly helpText?: string
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  labelSize,
  helpType,
  helpText,
  children,
  ...props
}) => (
  <Field {...props}>
    <Label size={labelSize}>{label}</Label>
    {children}
    <FieldHelp variant={helpType}>{helpText}</FieldHelp>
  </Field>
)
