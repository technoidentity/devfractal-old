import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import {
  Button,
  Field as FieldGroup,
  FieldHelp,
  Input,
  Label,
} from '../../../../devfractal/form'
import { Container } from '../../../../devfractal/layout'
import { logger } from '../../common'
import { initialLoginValues, loginSchema, LoginValues } from './common'

// DEMONSTRATING THAT THIS DOES NOT WORK!!!
const LoginFormInner: React.SFC<FormikProps<LoginValues>> = () => (
  <Container>
    <Form>
      <FieldGroup>
        <Label>Username</Label>
        <Field
          name="username"
          type="text"
          component={({ field }: any) => <Input {...field} />}
        />
        <ErrorMessage
          name="username"
          component={({ children }) => (
            <FieldHelp variant="danger">{children}</FieldHelp>
          )}
        />
      </FieldGroup>

      <FieldGroup>
        <Label>Password</Label>
        <Field
          name="password"
          type="password"
          component={({ field }: any) => <Input {...field} />}
        />
        <ErrorMessage
          name="password"
          component={({ children }) => (
            <FieldHelp variant="danger">{children}</FieldHelp>
          )}
        />
      </FieldGroup>

      <FieldGroup groupModifier="grouped-centered">
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button type="reset" variant="danger">
          Reset
        </Button>
      </FieldGroup>
    </Form>
  </Container>
)

export const NotWorkingLoginForm: React.SFC = () => (
  <Formik
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
    render={LoginFormInner}
    onSubmit={logger}
  />
)
