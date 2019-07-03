import React from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import { invariant } from 'technoidentity-utils'

interface AuthContext {
  readonly isLoggedIn: boolean
  login(): void
  logout(): void
}

const AuthContext = React.createContext<AuthContext | undefined>(undefined)

export const AuthProvider: React.FC = ({ children }) => {
  const [value, set] = useLocalStorage('loggedIn', 'no')

  const login = () => set('yes')
  const logout = () => set('no')

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: value === 'yes', login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContext {
  const result = React.useContext(AuthContext)
  invariant(result !== undefined, 'You need AuthProvider as ancestor somewhere')

  return result as AuthContext
}
