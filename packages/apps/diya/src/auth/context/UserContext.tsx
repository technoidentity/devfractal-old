import React from 'react'
import { LoginResponse } from '../../common'
import { useAuth } from './AuthContex'

const UserContex = React.createContext<LoginResponse | undefined>(undefined)

export const UserProvider: React.FC = ({ children }) => {
  const auth = useAuth()
  return <UserContex.Provider value={auth.data}>{children}</UserContex.Provider>
}

export const useUser = () => {
  const context = React.useContext(UserContex)
  return context
}
