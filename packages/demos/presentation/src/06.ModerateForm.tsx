import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import {
  Button,
  Container,
  ErrorField,
  Field as FieldGroup,
  InputField,
  Label,
} from 'technoidentity-devfractal'
import yup from 'yup'

interface LoginValues {
  readonly name: string
  readonly password: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
})

export const initialLoginValues: LoginValues = { name: '', password: '' }

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
    validationSchema={schema}
    render={LoginFormInner}
    onSubmit={values => console.log(values)}
  />
)
