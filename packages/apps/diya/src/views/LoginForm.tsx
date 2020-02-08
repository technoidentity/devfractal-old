import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import {
  Button,
  ButtonsGroup,
  ErrorField,
  Field,
  InputField,
  Section,
} from 'technoidentity-devfractal'
import * as yup from 'yup'

export interface LoginValues {
  readonly username: string
  readonly password: string
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
})

const initialValues: LoginValues = { username: '', password: '' }

const InnerLoginForm: React.FC<FormikProps<LoginValues>> = () => (
  <Section
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <Form>
      <Section>
        <Field>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            leftIcon={faUser}
          />
          <ErrorField name="username" />
        </Field>
        <Field>
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            leftIcon={faLock}
          />
          <ErrorField name="password" />
        </Field>
        <Field>
          <ButtonsGroup alignment="centered">
            <Button type="submit" variant="primary">
              Login
            </Button>
          </ButtonsGroup>
        </Field>
      </Section>
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
    onSubmit={async (values, actions) => {
      await onLogin(values)
      actions.setSubmitting(false)
    }}
    component={InnerLoginForm}
  />
)
