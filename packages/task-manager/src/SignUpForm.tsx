import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import Yup from 'yup'

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

const schema = Yup.object().shape({
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

const InnerSignUpForm: React.FC<FormikProps<SignUpValues>> = () => (
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

export interface SignUpFormProps {
  onUserSubmit(values: SignUpValues): void
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onUserSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={(values, actions) => {
      onUserSubmit(values)
      actions.setSubmitting(false)
      // @TODO: handle the error case
    }}
    component={InnerSignUpForm}
  />
)
