import React from 'react'
import { loginUser } from '../api'
import { ServerError, useSubmit } from '../utils'
import { LoginForm } from '../views'

export const LoginRoute: React.FC = () => {
  const [serverError, onLogin] = useSubmit('/tasks', loginUser)

  return (
    <>
      <ServerError serverError={serverError} />
      <LoginForm onLogin={onLogin} />
    </>
  )
}
