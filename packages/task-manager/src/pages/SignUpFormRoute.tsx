import React from 'react'
import { RouteComponentProps } from 'react-router'
import { createUser } from '../api'
import { ServerError } from '../utils'
import { SignUpForm, SignUpValues } from '../views'

export const SignUpFormRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )
  const postUser = async (data: SignUpValues) => {
    console.log(data)
    return createUser(data)
      .then(() => history.push('/login'))
      .catch(err => setServerError(err.response.data.error))
  }
  return (
    <>
      <ServerError serverError={serverError} />
      <SignUpForm onSignUp={postUser} />
    </>
  )
}
