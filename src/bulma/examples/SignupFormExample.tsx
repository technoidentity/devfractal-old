import React from 'react'

import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'

import * as Yup from 'yup'
import { logger } from './common'

interface SignUpFormValues {
  readonly username: string
  readonly password: string
  readonly confirmPassword: string
  readonly email: string
  readonly confirmEmail: string
}

export const InnerSignUpForm: React.SFC<FormikProps<SignUpFormValues>> = ({
  isSubmitting,
}) => (
  <Form>
    <label>Username</label>
    <br />
    <Field name="username" type="text" />
    <br />
    <ErrorMessage name="username" className="field-error" />
    <br />
    <label>Password</label>
    <br />
    <Field name="password" type="password" />
    <br />
    <ErrorMessage name="password" className="field-error" />
    <br />
    <label>Password confirmation</label>
    <br />
    <Field name="confirmPassword" type="password" />
    <br />
    <ErrorMessage name="confirmPassword" className="field-error" />
    <br />
    <label>Email</label>
    <br />
    <Field name="email" type="email" />
    <br />
    <ErrorMessage name="email" className="field-error" />
    <br />
    <label>Email confirmation</label>
    <br />
    <Field name="confirmEmail" />
    <br />
    <ErrorMessage name="confirmEmail" className="field-error" />
    <br />
    <button type="submit" disabled={isSubmitting}>
      SIGNUP
    </button>
  </Form>
)

const signUpSchema: Yup.ObjectSchema<{}> = Yup.object().shape({
  username: Yup.string()
    .required()
    .min(6),
  password: Yup.string()
    .required()
    .min(8),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords don't match")
    .required(),
  email: Yup.string()
    .email()
    .required(),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email')], "Emails don't match")
    .required(),
})

interface SignUpFormProps {
  onSignUp(values: SignUpFormValues): void
}

export const SignUpForm: React.SFC<SignUpFormProps> = ({ onSignUp }) => (
  <Formik
    validationSchema={signUpSchema}
    initialValues={{
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      confirmEmail: '',
    }}
    onSubmit={onSignUp}
    render={InnerSignUpForm}
  />
)

export const FormikSignUpForm: React.SFC = () => (
  <SignUpForm onSignUp={() => logger('hello')} />
)
