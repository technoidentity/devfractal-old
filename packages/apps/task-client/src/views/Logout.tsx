import { component, useRedirect } from 'technoidentity-core'
import { Button } from 'technoidentity-ui'
import { req, string } from 'technoidentity-utils'
import React from 'react'
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
