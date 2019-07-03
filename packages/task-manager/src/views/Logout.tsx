import React from 'react'
import { Button } from 'technoidentity-devfractal'
import { taskApi } from '../common'
import { useAuth } from '../utils'

export const Logout: React.FC = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <>
      {isLoggedIn && (
        <Button
          onClick={async () => {
            await taskApi.del('')
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
