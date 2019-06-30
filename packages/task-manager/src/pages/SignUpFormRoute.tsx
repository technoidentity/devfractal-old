import React from 'react'
import { userApi } from '../api'
import { ServerError, useSubmit } from '../utils'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => {
  const [serverError, onSignUp] = useSubmit('/login', userApi.create)

  return (
    <>
      <ServerError error={serverError} />
      <SignUpForm onSignUp={onSignUp} />
    </>
  )
}
