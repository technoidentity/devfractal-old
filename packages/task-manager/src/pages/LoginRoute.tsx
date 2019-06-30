import React from 'react'
import { sessionApi } from '../api'
import { ServerError, useSubmit } from '../utils'
import { LoginForm } from '../views'

export const LoginRoute: React.FC = () => {
  const [serverError, onLogin] = useSubmit('/tasks', sessionApi.create)

  return (
    <>
      <ServerError error={serverError} />
      <LoginForm onLogin={onLogin} />
    </>
  )
}
