import { FormikActions } from 'formik'
import React from 'react'
import { verify } from 'technoidentity-utils'
import { AuthUserInfo } from '../common'
import { LoginValues } from '../views'

interface AuthContext<T, R> {
  readonly user: R | null
  readonly setUser: React.Dispatch<R | null>
  readonly setCount: React.Dispatch<number>
  readonly noOfLoginAttempts: number
  readonly headerText: string
  readonly setHeaderText: React.Dispatch<string | null>
  login(
    values: T,
    actions: FormikActions<LoginValues>,
    setCount: React.Dispatch<number>,
    noOfLoginAttempts: number,
  ): Promise<R>
  logout(): void
}

const AuthContext = React.createContext<
  AuthContext<LoginValues, AuthUserInfo> | undefined
>(undefined)

interface AuthProviderProps<T, R> extends AuthContext<T, R> {}

export const AuthProvider: React.FC<
  AuthProviderProps<LoginValues, AuthUserInfo>
> = ({
  user,
  setUser,
  login,
  logout,
  setCount,
  noOfLoginAttempts,
  children,
  headerText,
  setHeaderText,
}) => {
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        setCount,
        noOfLoginAttempts,
        headerText,
        setHeaderText,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContext<LoginValues, AuthUserInfo> {
  const context = React.useContext(AuthContext)
  verify(context !== undefined)

  return context as AuthContext<LoginValues, AuthUserInfo>
}
