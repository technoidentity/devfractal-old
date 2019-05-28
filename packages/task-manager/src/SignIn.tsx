import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import Yup from 'yup'

export interface User {
  readonly name: string
  readonly email: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
})

export const initialValues = { name: '', email: '' }

const InnerSignInForm: React.FC<FormikProps<User>> = () => {
  return (
    <Form>
      <label>Name</label>
      <Field name="name" type="text" />
      <label>Email</label>
      <Field name="email" type="email" />
      <button type="submit">Submit</button>
    </Form>
  )
}

export interface FormValues {
  onUserSubmit(values: User): void
}

export const SignInForm: React.FC<FormValues> = ({ onUserSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      onUserSubmit(values)
      actions.setSubmitting(false)
    }}
    component={InnerSignInForm}
  />
)
