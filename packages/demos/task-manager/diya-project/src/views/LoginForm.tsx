import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import {
  Button,
  ButtonsGroup,
  Field,
  Input,
  Section,
} from 'technoidentity-devfractal'
import * as yup from 'yup'

export interface LoginValues {
  readonly name: string
  readonly password: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
})

export const initialValues: LoginValues = { name: '', password: '' }

const InnerLoginForm: React.FC<FormikProps<LoginValues>> = () => (
  <Section
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <Form>
      <Field>
        <Input
          type="text"
          name="name"
          placeholder="Username"
          leftIcon={faUser}
        />
      </Field>

      <Field>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          leftIcon={faLock}
        />
      </Field>

      <Field>
        <ButtonsGroup alignment="centered">
          <Button type="submit">Login</Button>
        </ButtonsGroup>
      </Field>
    </Form>
  </Section>
)

export interface LoginFormProps {
  onLogin(values: LoginValues): Promise<void>
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={onLogin}
    component={InnerLoginForm}
  />
)
