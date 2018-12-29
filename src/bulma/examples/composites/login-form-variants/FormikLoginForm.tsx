import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { logger } from '../../common'
import { initialLoginValues, loginSchema, LoginValues } from './common'

const LoginFormInner: React.SFC<FormikProps<LoginValues>> = () => (
  <Form>
    <fieldset>
      <label>Username</label>
      <Field name="username" component="input" />
      <ErrorMessage name="username" />
    </fieldset>

    <fieldset>
      <label>Password</label>
      <Field name="password" type="password" component="input" />
      <ErrorMessage name="password" />
    </fieldset>

    <fieldset>
      <button type="submit"> Submit </button>
      <button type="reset"> Reset </button>
    </fieldset>
  </Form>
)

export const FormikLoginForm: React.SFC = () => (
  <Formik
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
    render={LoginFormInner}
    onSubmit={logger}
  />
)
