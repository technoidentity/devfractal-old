import React from 'react'
import { LoginForm } from './views/LoginForm'

// tslint:disable-next-line: no-console
// tslint:disable-next-line: no-void-expression
export const App = () => (
  <LoginForm onLogin={async values => await console.log(values)} />
)
