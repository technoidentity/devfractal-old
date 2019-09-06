import React from 'react'
import { useAuth } from './AuthContex'

const UserContex = React.createContext<{} | undefined>(undefined)

export const UserProvider: React.FC = ({ children }) => {
  const auth = useAuth()
  return <UserContex.Provider value={auth.data}>{children}</UserContex.Provider>
}

export const useUser = () => React.useContext(UserContex)
