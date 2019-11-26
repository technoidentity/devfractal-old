import { FormikActions } from 'formik'
import React from 'react'
import { LoginForm, LoginValues } from '../views'
import { useAuth } from './AuthContext'

export const UnAuthenticatedApp: React.FC = () => {
  const { login, setUser, setCount, noOfLoginAttempts } = useAuth()

  return (
    <LoginForm
      onLogin={async (
        values: LoginValues,
        actions: FormikActions<LoginValues>,
      ) => setUser(await login(values, actions, setCount, noOfLoginAttempts))}
    />
  )
}
