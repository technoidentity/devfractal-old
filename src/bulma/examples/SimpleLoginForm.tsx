import * as React from 'react'

import { string, object, ObjectSchema } from 'yup'

import { submitToConsole, Simple, SimpleValues } from '../formik'

interface LoginValues {
  readonly username: string
  readonly password: string
}

const loginSchema: ObjectSchema<LoginValues> = object({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
})

export const SimpleLoginForm: React.SFC = () => (
  <Simple.Form
    initialValues={{ username: '', password: '' }}
    validationSchema={loginSchema}
    onSubmit={submitToConsole}
  >
    <Simple.Text label="Username:" name="username" />
    <Simple.Password label="Password:" name="password" />
    <Simple.FormButtons />

    <SimpleValues />
  </Simple.Form>
)
