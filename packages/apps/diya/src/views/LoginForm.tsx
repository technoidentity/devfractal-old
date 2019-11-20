import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import {
  Button,
  Card,
  Column,
  Columns,
  ErrorField,
  Field,
  Image,
  InputField,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import diyaLogo from '../images/diyaLogo.png'
import './LoginForm.css'

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
  <div
    className="hero is-fullheight"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Card
      style={{
        width: '325px',
        height: '400px',
        borderRadius: '10px',
      }}
    >
      <Columns>
        <Column>
          <Image
            src={diyaLogo}
            alt="diyaImage"
            size="96x96"
            style={{ margin: '35px 110px' }}
          />
          <Form
            style={{
              marginTop: '100px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <Field>
              <InputField
                style={{
                  borderRadius: '5px',
                }}
                type="text"
                name="username"
                placeholder="Username"
                leftIcon={faUser}
              />
              <ErrorField name="username" />
            </Field>
            <Field>
              <InputField
                style={{
                  borderRadius: '5px',
                }}
                type="password"
                name="password"
                placeholder="Password"
                leftIcon={faLock}
              />
              <ErrorField name="password" />
            </Field>
            <Field>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                style={{
                  borderRadius: '5px',
                }}
              >
                Login
              </Button>
            </Field>
          </Form>
        </Column>
      </Columns>
    </Card>
  </div>
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
