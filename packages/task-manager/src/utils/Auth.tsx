import React from 'react'

const defaultAuth = { loggedIn: false }

const AuthContext = React.createContext(defaultAuth)

export const AuthProvider: React.FC = ({ children }) => {
  const auth = localStorage.getItem('loggedIn')

  return (
    <AuthContext.Provider value={auth ? JSON.parse(auth) : defaultAuth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): typeof defaultAuth {
  return React.useContext(AuthContext)
}

export function setLoggedIn(): void {
  localStorage.setItem('loggedIn', JSON.stringify({ loggedIn: true }))
}

export function resetLoggedIn(): void {
  localStorage.setItem('loggedIn', JSON.stringify({ loggedIn: true }))
}
