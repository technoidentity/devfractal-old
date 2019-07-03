import React from 'react'
import { Button } from 'technoidentity-devfractal'
import { sessionApi } from '../common'
import { useAuth, useRouter } from '../utils'

interface LogoutProps {
  readonly redirectURL: string
}

export const Logout: React.FC<LogoutProps> = ({ redirectURL }) => {
  const { isLoggedIn, logout } = useAuth()
  const { history } = useRouter()

  return (
    <>
      {isLoggedIn && (
        <Button
          onClick={async () => {
            await sessionApi.del('')
            logout()
            history.push(redirectURL)
          }}
          className="button is-dark"
        >
          Logout
        </Button>
      )}
    </>
  )
}
