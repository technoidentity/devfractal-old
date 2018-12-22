import * as React from 'react'

import { string, object, ObjectSchema } from 'yup'

import { apiSubmit, Simple, SimpleValues, consoleSubmit } from '../formik'

interface LoginValues {
  readonly username: string
  readonly password: string
}

const loginSchema: ObjectSchema<LoginValues> = object({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
})

const url: string = 'http://localhost:3000/users'
const initialLoginValues: LoginValues = { username: '', password: '' }

export const SimpleLoginForm: React.SFC = () => (
  <Simple.Form
    persist="simple-login-form"
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
    onSubmit={consoleSubmit(0)}
  >
    <Simple.Text label="Username:" name="username" />
    <Simple.Password label="Password:" name="password" />
    <Simple.FormButtons />

    <SimpleValues />
  </Simple.Form>
)
