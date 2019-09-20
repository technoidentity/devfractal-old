import React from 'react'
import { http as httpAPI } from 'technoidentity-devfractal'
import { LoginResponse } from '../common'
import { LoginValues } from '../views'
import { AuthProvider, UserProvider } from './context'

const http: ReturnType<typeof httpAPI> = httpAPI({
  baseURL: 'http://cargos-aws.devti.in/v1',
})

const login = async (values: LoginValues) => {
  return http.post(
    {
      resource: 'session',
    },
    values,
    LoginResponse,
  )
}

const logOut = async () => {
  await http.del({ resource: 'logout' })
}

export const AppProviders: React.FC = ({ children }) => {
  const [data, setData] = React.useState()
  return (
    <AuthProvider data={data} setData={setData} login={login} logout={logOut}>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}
