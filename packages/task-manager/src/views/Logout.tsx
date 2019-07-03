import React from 'react'
import { Button } from 'technoidentity-devfractal'
import { sessionApi } from '../common'
import { useAuth } from '../utils'

export const Logout: React.FC = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <>
      {isLoggedIn && (
        <Button
          onClick={async () => {
            await sessionApi.del('')
            logout()
          }}
          className="button is-dark"
        >
          Logout
        </Button>
      )}
    </>
  )
}
