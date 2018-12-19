import * as React from 'react'

import * as yup from 'yup'

import {
  ErrorMessage,
  FormikConsumer,
  Form,
  Formik,
  FormikActions,
} from 'formik'

import { Persist } from 'formik-persist'

import { Label, Button, Field } from '../form'
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

export const SimpleText: React.SFC<SimpleInputProps> = props => (
  <SimpleInput {...props} type="text" />
)
export const SimplePassword: React.SFC<SimpleInputProps> = props => (
  <SimpleInput {...props} type="password" />
)
export interface SimpleFormButtonsProps {
  readonly submit?: boolean | string
  readonly reset?: boolean | string
}

export const SimpleFormButtons: React.SFC<SimpleFormButtonsProps> = ({
  submit = 'Submit',
  reset = 'Reset',
}) => (
  <FormikConsumer>
    {({ dirty, isSubmitting, handleReset }) => (
      <Field groupModifier="grouped-right">
        {submit !== false && (
          <Button type="submit" variant="info" disabled={isSubmitting}>
            {submit}
          </Button>
        )}
        {reset !== false && (
          <Button
            disabled={!dirty || isSubmitting}
            variant="danger"
            type="button"
            onClick={handleReset}
          >
            {reset}
          </Button>
        )}
      </Field>
    )}
  </FormikConsumer>
)

export interface SimpleFormProps<Values> {
  readonly initialValues: Values
  readonly validationSchema: yup.ObjectSchema<Values>
  readonly persist?: string
  onSubmit(values: Values, actions: FormikActions<Values>): void
}

export const SimpleForm: <Values>(
  props: SimpleFormProps<Values> & { readonly children: React.ReactNode },
) => JSX.Element = ({
  initialValues,
  validationSchema,
  onSubmit,
  persist,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        <Form>
          {children}
          {persist && <Persist name={persist} />}
        </Form>
      }
    </Formik>
  )
}

export const SimpleValues: React.SFC = () => (
  <FormikConsumer>
    {({ values }) => (
      <code style={{ background: '#f6f8fa' }}>
        {JSON.stringify(values, null, 2)}
      </code>
    )}
  </FormikConsumer>
)
// tslint:disable-next-line:typedef
export const Simple = {
  Form: SimpleForm,
  FormButtons: SimpleFormButtons,
  Input: SimpleInput,
  Text: SimpleText,
  Password: SimplePassword,
  Values: SimpleValues,
}
