import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import yup from 'yup'

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

  confirmPassword: yup.string().required(),
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
  onSignUp(values: SignUpValues): void
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={(values, actions) => {
      onSignUp(values)
      actions.setSubmitting(false)
      // @TODO: handle the error case
    }}
    component={InnerSignUpForm}
  />
)
