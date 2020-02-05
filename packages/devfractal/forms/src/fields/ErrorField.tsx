import { FieldHelp, FieldHelpProps } from '@stp/ui'
import { ErrorMessage, ErrorMessageProps } from 'formik'
import React from 'react'

type FormikErrorProps = Omit<FieldHelpProps, 'variant'>

const FormikError: React.FC<FormikErrorProps> = ({ children, ...props }) => (
  <FieldHelp {...props} variant="danger">
    {children}
  </FieldHelp>
)

export const ErrorField: React.FC<ErrorMessageProps> = props => (
  <ErrorMessage {...props} component={FormikError} />
)
