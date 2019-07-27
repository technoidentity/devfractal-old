import { string } from 'io-ts'
import React from 'react'
import { useRedirect } from 'technoidentity-devfractal-api'
import { Button, component } from 'technoidentity-devfractal-ui-core'
import { req } from 'technoidentity-utils'
import { sessionApi } from '../common'
import { useAuth } from '../utils'

const LogoutProps = req({ redirectPath: string })

export const Logout = component(LogoutProps, ({ redirectPath }) => {
  const { isLoggedIn, logout } = useAuth()
  const { onRedirect } = useRedirect()

  return (
    <>
      {isLoggedIn && (
        <Button
          variant="dark"
          onClick={async () => {
            await sessionApi.del('')
            logout()
            onRedirect(redirectPath)
          }}
        >
          Logout
        </Button>
      )}
    </>
  )
})
