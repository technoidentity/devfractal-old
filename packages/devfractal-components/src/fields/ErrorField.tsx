import { ErrorMessage, ErrorMessageProps } from 'formik'
import React from 'react'
import { FieldHelp, FieldHelpProps } from '../lib'

type FormikErrorProps = Omit<FieldHelpProps, 'variant'>

const FormikError: React.FC<FormikErrorProps> = ({ children, ...props }) => (
  <FieldHelp {...props} variant="danger">
    {children}
  </FieldHelp>
)

export type ErrorMessageProps = FormikErrorProps

export const ErrorField: React.FC<ErrorMessageProps> = props => (
  <ErrorMessage {...props} component={FormikError} />
)
