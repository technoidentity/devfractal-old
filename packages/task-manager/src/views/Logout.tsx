import React from 'react'
import { Button } from 'technoidentity-devfractal'
import { taskApi } from '../api'
import { resetLoggedIn, useAuth } from '../utils'

export const Logout: React.FC = () => {
  const auth = useAuth()

  return (
    <>
      {auth.loggedIn && (
        <Button
          onClick={async () => {
            await taskApi.del('')
            resetLoggedIn()
          }}
          className="button is-dark"
        >
          Logout
        </Button>
      )}
    </>
  )
}
