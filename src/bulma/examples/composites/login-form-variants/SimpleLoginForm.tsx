import React from 'react'
import { consoleSubmit, Simple, SimpleValues } from '../../../formik'
import { initialLoginValues, loginSchema } from './common'

export const LoginForm: React.SFC = () => (
  <Simple.Form
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
