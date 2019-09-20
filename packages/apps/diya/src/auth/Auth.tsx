import React from 'react'
import { AuthenticatedApp } from './AuthenticatedApp'
import { useUser } from './context'
import { UnAuthenticatedApp } from './UnAuthenticatedApp'

export const Auth = () => {
  const user = useUser()
  return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />
}
