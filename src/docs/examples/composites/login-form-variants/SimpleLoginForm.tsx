import React from 'react'
import { consoleSubmit, Simple } from '../../devfractal'
import { initialLoginValues, loginSchema } from './common'

export const SimpleLoginForm: React.SFC = () => (
  <Simple.Form
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
    onSubmit={consoleSubmit(0)}
  >
    <Simple.Text label="Username:" name="username" />
    <Simple.Password label="Password:" name="password" />
    <Simple.FormButtons />

    <Simple.Values />
  </Simple.Form>
)
