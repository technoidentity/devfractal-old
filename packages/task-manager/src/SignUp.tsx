import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import Yup from 'yup'

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

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(2)
    .max(15),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
})

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
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      onUserSubmit(values)
      actions.setSubmitting(false)
    }}
    component={InnerSignUpForm}
  />
)
