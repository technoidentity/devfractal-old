import 'bulma/css/bulma.css'
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from 'technoidentity-devfractal'
import * as yup from 'yup'

export interface SignUpValues {
  readonly name: string
  readonly email: string
  readonly password: string
  readonly confirmPassword: string
}

const initialValues: SignUpValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .max(15),

  email: yup
    .string()
    .email()
    .required(),

  password: yup.string().required(),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match'),
})

const InnerSignUpForm: React.FC<FormikProps<SignUpValues>> = () => (
  <div className="columns">
    <div className="column is-half is-offset-one-quarter">
      <Form>
        <Section>
          <h1 className="title has-text-centered">Create User</h1>
          <div className="field">
            <label className="label">Name</label>
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
            <label className="label">Email</label>
            <div className="control">
              <Field
                type="email"
                name="email"
                className="input "
                placeholder="Email"
              />
            </div>
            <div className="help is-danger">
              <ErrorMessage name="email" />
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
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <Field
                type="password"
                name="confirmPassword"
                className="input "
                placeholder="Confirm Password"
              />
            </div>
            <div className="help is-danger">
              <ErrorMessage name="confirmPassword" />
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button className="button is-primary" type="submit">
                Submit
              </button>
            </p>
            <p className="control">
              <button className="button is-danger" type="reset">
                Reset
              </button>
            </p>
          </div>
          <div className="text has-text-centered">
            already a user <Link to="/login">Login</Link>
          </div>
        </Section>
      </Form>
    </div>
  </div>
)

export interface SignUpFormProps {
  onSignUp(values: SignUpValues): Promise<void>
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={async (values, actions) => {
      await onSignUp(values)
      actions.setSubmitting(false)
      // @TODO: handle the error case
    }}
    component={InnerSignUpForm}
  />
)
