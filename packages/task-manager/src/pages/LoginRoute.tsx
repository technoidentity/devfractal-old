import React from 'react'
import { RouteComponentProps } from 'react-router'
import { loginUser } from '../api'
import { ServerError } from '../utils'
import { LoginForm, LoginValues } from '../views'

export const LoginRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )

  const onLogin = async (data: LoginValues) => {
    return loginUser(data)
      .then(() => history.push('/tasks'))
      .catch(err => setServerError(err.response.data.error))
  }

  return (
    <>
      <ServerError serverError={serverError} />
      <LoginForm onLogin={onLogin} />
    </>
  )
}
