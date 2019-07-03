import 'bulma/css/bulma.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Column,
  Columns,
  Section,
  Simple,
  Text,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { formSubmit } from '../utils'

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

export interface SignUpFormProps {
  onSubmit(values: SignUpValues): Promise<void>
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit: onSignUp,
}) => (
  <Section>
    <Columns columnCentered>
      <Column size="half">
        <Simple.Form
          initialValues={initialValues}
          onSubmit={formSubmit(onSignUp)}
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
)
