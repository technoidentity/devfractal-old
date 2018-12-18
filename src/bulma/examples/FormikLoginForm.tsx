import * as React from 'react'

import * as yup from 'yup'

import { FormikProps, Form, Formik } from 'formik'

import { logger } from './common'

import { SimpleInput, SimpleFormButtons } from '../formik'

interface LoginValues {
  readonly username: string
  readonly password: string
}

export const LoginFormInner: React.SFC<FormikProps<LoginValues>> = props => (
  <>
    <Form>
      <SimpleInput label="Username:" name="username" type="text" />
      <br />
      <SimpleInput label="Password:" name="password" type="password" />
      <br />
      <SimpleFormButtons handleReset={props.handleReset} />
    </Form>
    <code>{JSON.stringify(props.values)}</code>
  </>
)

const validationSchema: yup.ObjectSchema<LoginValues> = yup.object({
  username: yup.string().required('This field is required'),
  password: yup.string().required('This Field is Required'),
})

interface FormikLoginFormProps {
  onLogin(values: LoginValues): void
}

export const FormikLoginForm: React.SFC<FormikLoginFormProps> = ({
  onLogin,
}) => (
  <Formik<LoginValues>
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={onLogin}
    render={LoginFormInner}
  />
)

export const FormikLoginFormExample: React.SFC = () => (
  <FormikLoginForm onLogin={logger} />
)
