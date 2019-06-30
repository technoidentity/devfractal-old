import React from 'react'
import { createUser } from '../api'
import { ServerError, useSubmit } from '../utils'
import { SignUpForm } from '../views'

export const SignUpFormRoute: React.FC = () => {
  const [serverError, onSignUp] = useSubmit('/login', createUser)

  return (
    <>
      <ServerError serverError={serverError} />
      <SignUpForm onSignUp={onSignUp} />
    </>
  )
}
