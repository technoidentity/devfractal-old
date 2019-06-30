import React from 'react'
import { Button } from 'technoidentity-devfractal'
import { taskApi } from '../api'
import { useAuth } from '../utils'

export const Logout: React.FC = () => {
  const auth = useAuth()

  return (
    <>
      {auth.loggedIn && (
        <Button
          onClick={async () => {
            await taskApi.del('')
            localStorage.setItem(
              'loggedIn',
              JSON.stringify({ loggedIn: false }),
            )
          }}
          className="button is-dark"
        >
          Logout
        </Button>
      )}
    </>
  )
}
