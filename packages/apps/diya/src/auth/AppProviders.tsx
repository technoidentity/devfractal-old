import React from 'react'
import { http as httpAPI } from 'stp-devfractal'
import { AuthUserInfo } from '../common'
import { baseURL } from '../config'
import { LoginValues } from '../views'
import { AuthProvider } from './AuthContext'

const http = httpAPI({ baseURL })

async function login(values: LoginValues): Promise<AuthUserInfo> {
  return http.post({ resource: 'session' }, values, AuthUserInfo)
}

async function logOut(): Promise<void> {
  // TODO: Shouldn't this be 'session' instead of 'logout'?
  await http.del({ resource: 'logout' })
}

export const AppProviders: React.FC = ({ children }) => {
  const [user, setUser] = React.useState()

  return (
    <AuthProvider user={user} setUser={setUser} login={login} logout={logOut}>
      {children}
    </AuthProvider>
  )
}
