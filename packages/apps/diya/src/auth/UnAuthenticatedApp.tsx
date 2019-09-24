import React from 'react'
import { LoginForm, LoginValues } from '../views'
import { useAuth } from './AuthContext'

export const UnAuthenticatedApp: React.FC = () => {
  const { login, setUser } = useAuth()

  return (
    <LoginForm
      onLogin={async (values: LoginValues) => setUser(await login(values))}
    />
  )
}
