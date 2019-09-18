import React from 'react'
import { LoginResponse } from '../../common'
import { LoginValues } from '../../views'

interface AuthContext<T, R> {
  readonly data: R
  readonly setData: React.Dispatch<R>
  login(values: T): Promise<R>
  logout(): void
}

interface AuthProviderProps<T, R> extends AuthContext<T, R> {
  readonly children: React.ReactNode
}

const AuthContex = React.createContext<
  AuthContext<LoginValues, LoginResponse> | undefined
>(undefined)

export const AuthProvider = ({
  data,
  setData,
  login,
  logout,
  children,
}: AuthProviderProps<LoginValues, LoginResponse>) => {
  return (
    <AuthContex.Provider value={{ data, setData, login, logout }}>
      {children}
    </AuthContex.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContex)
  if (context === undefined) {
    throw new Error('userAuth must be used within a AuthProvider')
  }
  return context
}
