import * as React from 'react'
import {
  Formik,
  Form,
  Field,
  FormikProps,
  FieldProps,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import { logger } from './common'
import { Label } from '../form/Label'
import { Button } from '../form/Button'
import { Field as BulmaField } from '../form/Field'
import { Input } from '../elements/Input'
// import { Form, Field, FormikProps, Formik } from 'formik'

interface LoginValues {
  readonly username: string
  readonly password: string
}

export const FormikInput: React.SFC<FieldProps> = ({
  form,
  field,
  ...props
}) => <Input type="text" {...field} {...props} />

export const LoginFormInner: React.SFC<FormikProps<LoginValues>> = props => (
  <Form>
    <Label>Username:</Label>
    <Field id="username" name="username" type="text" component={FormikInput} />
    <ErrorMessage name="username" className="field-error" />
    <br />
    <Label>Password:</Label>
    <Field
      id="password"
      name="password"
      type="password"
      component={FormikInput}
    />
    <ErrorMessage name="password" className="field-error" />
    <br />
    <BulmaField groupModifier="grouped-right">
      <Button type="submit" color="info">
        Submit
      </Button>
      <Button color="info" onClick={props.handleReset}>
        Reset
      </Button>
    </BulmaField>
    <code>{JSON.stringify(props.values)}</code>
  </Form>
)

const validationSchema: Yup.ObjectSchema<{}> = Yup.object().shape({
  username: Yup.string().required('This field is required'),
  password: Yup.string().required('This Field is Required'),
})

interface FormikLoginFormProps {
  onLogin(values: LoginValues): void
}

export const FormikLoginForm: React.SFC<FormikLoginFormProps> = ({
  onLogin,
}) => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={onLogin}
    render={LoginFormInner}
  />
)

export const FormikLoginFormExample: React.SFC = () => (
  <FormikLoginForm onLogin={logger} />
)
