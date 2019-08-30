import { Simple } from 'devfractal-simple'
import { Column, Columns, component, Section, Text } from 'devfractal-ui-core'
import { FormikActions } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { string, TypeOf } from 'technoidentity-spec'
import { empty, fn, req } from 'technoidentity-utils'
import * as yup from 'yup'

const SignUpValues = req({
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
})

type SignUpValues = TypeOf<typeof SignUpValues>

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
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

const SignUpFormProps = req({
  onSubmit: fn<
    (
      values: Omit<SignUpValues, 'confirmPassword'>,
      actions: FormikActions<Omit<SignUpValues, 'confirmPassword'>>,
    ) => Promise<void>
  >(),
})

export const SignUpForm = component(SignUpFormProps, ({ onSubmit }) => (
  <Section>
    <Columns columnCentered>
      <Column size="half">
        <Simple.Form
          initialValues={empty(SignUpValues)}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          <Simple.Text name="name" label="Username" />
          <Simple.Email name="email" />
          <Simple.Password name="password" />
          <Simple.Password name="confirmPassword" />
          <Simple.FormButtons />
          <Text textAlignment="centered">
            Already a user?{' '}
            <Link to="/login" style={{ textDecoration: 'underline' }}>
              Login here
            </Link>
          </Text>
        </Simple.Form>
      </Column>
    </Columns>
  </Section>
))
