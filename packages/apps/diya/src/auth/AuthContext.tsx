import { verify } from '@stp/utils'
import React from 'react'
import { AuthUserInfo } from '../common'
import { LoginValues } from '../views'

interface AuthContext<T, R> {
  readonly user: R
  readonly setUser: React.Dispatch<R>
  login(values: T): Promise<R>
  logout(): void
}

const AuthContext = React.createContext<
  AuthContext<LoginValues, AuthUserInfo> | undefined
>(undefined)

interface AuthProviderProps<T, R> extends AuthContext<T, R> {}

export const AuthProvider: React.FC<AuthProviderProps<
  LoginValues,
  AuthUserInfo
>> = ({ user, setUser, login, logout, children }) => {
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContext<LoginValues, AuthUserInfo> {
  const context = React.useContext(AuthContext)
  verify(context !== undefined)

  return context
}
