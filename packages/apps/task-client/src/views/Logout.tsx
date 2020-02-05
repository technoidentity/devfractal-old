import { Button } from '@stp/ui'
import { useRedirect } from '@stp/ui-api'
import { component } from '@stp/ui-core'
import { req, string } from '@stp/utils'
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
