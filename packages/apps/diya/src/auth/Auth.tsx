import React from 'react'
import { useAuth } from '../auth/AuthContext'
import { AuthenticatedApp } from './AuthenticatedApp'
import { UnAuthenticatedApp } from './UnAuthenticatedApp'

export const Auth: React.FC = () => {
  const { user } = useAuth()

  return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />
  // return <AuthenticatedApp />
}
