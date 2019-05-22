import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'

export interface User {
  readonly name: string
  readonly email: string
  readonly password: string
  readonly confirmPassword: string
}

export const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const InnerSignUpForm: React.FC<FormikProps<User>> = () => {
  return (
    <Form>
      <label>Name</label>
      <Field name="name" type="text" />
      <br />
      <label>Email</label>
      <Field name="email" type="email" />
      <br />
      <label>Password</label>
      <Field name="password" type="password" />
      <br />
      <label>Confirm Password</label>
      <Field name="confirmPassword" type="password" />
      <br />
      <button type="submit">Submit</button>
    </Form>
  )
}

export interface FormValues {
  onUserSubmit(values: User): void
}

export const SignUpForm: React.FC<FormValues> = ({ onUserSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, actions) => {
      onUserSubmit(values)
      actions.setSubmitting(false)
    }}
    render={InnerSignUpForm}
  />
)
