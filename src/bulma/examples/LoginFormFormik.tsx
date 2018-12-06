import * as React from 'react'
import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { logger } from './common'
// import { Form, Field, FormikProps, Formik } from 'formik'

interface LoginValues {
  readonly username: string
  readonly password: string
}

export const LoginFormInner: React.SFC<FormikProps<LoginValues>> = ({}) => (
  <Form>
    <label>Username:</label>
    <Field id="username" name="username" type="text" />
    <ErrorMessage name="username" component="div" className="field-error" />
    <br />
    <label>Password:</label>
    <Field id="password" name="password" type="password" />
    <ErrorMessage name="password" component="div" className="field-error" />
    <br />
    <button type="submit">Submit</button>
  </Form>
)

const validationSchema: Yup.ObjectSchema<{}> = Yup.object().shape({
  username: Yup.string().required('This field is required'),
  password: Yup.string().required('This Field is Required'),
})

interface FormikLoginFormProps {
  onLogin(values: LoginValues): void
}

export const FormikLoginForm: React.SFC<FormikLoginFormProps> = ({
  onLogin,
}) => (
  <Formik
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
