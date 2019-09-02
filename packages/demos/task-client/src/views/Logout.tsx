import { useRedirect } from 'devfractal-ui-api'
import { Button, component } from 'devfractal-ui-core'
import React from 'react'
import { string } from 'technoidentity-spec'
import { req } from 'technoidentity-utils'
import { sessionAPI } from '../common'
import { useAuth } from '../utils'

const LogoutProps = req({ redirectTo: string })

export const Logout = component(LogoutProps, ({ redirectTo }) => {
  const { isLoggedIn, logout } = useAuth()
  const { onRedirect } = useRedirect()

  return (
    <>
      {isLoggedIn && (
        <Button
          variant="dark"
          onClick={async () => {
            await sessionAPI.del('')
            logout()
            onRedirect(redirectTo)
          }}
        >
          Logout
        </Button>
      )}
    </>
  )
})
