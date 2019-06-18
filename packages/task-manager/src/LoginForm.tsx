import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import * as Yup from 'yup'

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

const InnerLoginForm: React.FC<FormikProps<User>> = () => {
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

export interface LoginFormValues {
  onUserSubmit(values: User): void
}

export const LoginForm: React.FC<LoginFormValues> = ({ onUserSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      onUserSubmit(values)
      actions.setSubmitting(false)
    }}
    component={InnerLoginForm}
  />
)
