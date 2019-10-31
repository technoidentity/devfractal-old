import React from 'react'
import { http as httpAPI } from 'technoidentity-devfractal'
import { AuthUserInfo } from '../common'
import { baseURL } from '../config'
import { LoginValues } from '../views'
import { AuthProvider } from './AuthContext'

const http = httpAPI({ baseURL })

async function login(values: LoginValues): Promise<AuthUserInfo> {
  const loginData = await http.post(
    { resource: 'session' },
    values,
    AuthUserInfo,
  )
  localStorage.setItem('loginData', JSON.stringify(loginData))
  return loginData
}

async function logOut(): Promise<void> {
  // TODO: Shouldn't this be 'session' instead of 'logout'?
  localStorage.clear()
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
