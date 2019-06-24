import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { Section } from 'technoidentity-devfractal'
import * as yup from 'yup'

export interface LoginValues {
  readonly name: string
  readonly password: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
})

export const initialValues: LoginValues = { name: '', password: '' }

const InnerLoginForm: React.FC<FormikProps<LoginValues>> = () => (
  <Form>
    <Section>
      <h1 className="title has-text-centered">Login</h1>
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <Field
            type="text"
            name="name"
            className="input "
            placeholder="Name"
          />
        </div>
        <div className="help is-danger">
          <ErrorMessage name="name" />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <Field
            type="password"
            name="password"
            className="input "
            placeholder="Password"
          />
        </div>
        <div className="help is-danger">
          <ErrorMessage name="password" />
        </div>
      </div>
      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <button className="button is-primary" type="submit">
            Login
          </button>
        </p>
      </div>
    </Section>
  </Form>
)

export interface LoginFormProps {
  onLogin(values: LoginValues): Promise<void>
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={async (values, actions) => {
      await onLogin(values)
      actions.setSubmitting(false)
    }}
    component={InnerLoginForm}
  />
)
