import React from 'react'
import { useAuth } from '../auth/AuthContext'
import { AuthUserInfo } from '../common'
import { AuthenticatedApp } from './AuthenticatedApp'
import { UnAuthenticatedApp } from './UnAuthenticatedApp'
import { isAuthenticated } from './util'

export const Auth: React.FC = () => {
  const { user } = useAuth()
  const logData: AuthUserInfo = isAuthenticated()

  return user || logData ? <AuthenticatedApp /> : <UnAuthenticatedApp />
}
