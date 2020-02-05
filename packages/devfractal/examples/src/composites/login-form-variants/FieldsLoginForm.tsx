import { ErrorField, InputField } from '@stp/forms'
import { Button, Container, Field as FieldGroup, Label } from '@stp/ui'
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { initialLoginValues, loginSchema, LoginValues } from './common'

const LoginFormInner: React.FC<FormikProps<LoginValues>> = () => (
  <Container>
    <Form>
      <FieldGroup>
        <Label>Username</Label>
        <InputField name="username" type="text" />
        <ErrorField name="username" />
      </FieldGroup>

      <FieldGroup>
        <Label>Password</Label>
        <InputField name="password" type="password" />
        <ErrorField name="password" />
      </FieldGroup>

      <FieldGroup groupModifier="grouped-centered">
        <Button type="submit" variant="info">
          Submit
        </Button>
        <Button type="reset" variant="danger">
          Reset
        </Button>
      </FieldGroup>
    </Form>
  </Container>
)

export const FieldsLoginForm: React.FC = () => (
  <Formik
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
    component={LoginFormInner}
    onSubmit={values => console.log(values)}
  />
)
