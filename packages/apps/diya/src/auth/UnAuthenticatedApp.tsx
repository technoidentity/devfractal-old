import React from 'react'
import { LoginForm, LoginValues } from '../views'
import { useAuth } from './context'

export const UnAuthenticatedApp: React.FC = () => {
  const { login, setData } = useAuth()
  return (
    <LoginForm
      onLogin={async (values: LoginValues) => {
        const data = await login(values)
        setData(data)
      }}
    />
  )
}
