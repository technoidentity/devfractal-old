import 'bulma/css/bulma.css'
import { string, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Column,
  Columns,
  component,
  formSubmit,
  Section,
  Simple,
  Text,
} from 'technoidentity-devfractal'
import { emptyFromType, fn, req } from 'technoidentity-utils'
import * as yup from 'yup'

export const SignUpValues = req({
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
  onSubmit: fn<(values: SignUpValues) => Promise<void>>(),
})

export const SignUpForm = component(SignUpFormProps, ({ onSubmit }) => (
  <Section>
    <Columns columnCentered>
      <Column size="half">
        <Simple.Form
          initialValues={emptyFromType(SignUpValues)}
          onSubmit={formSubmit(onSubmit)}
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
