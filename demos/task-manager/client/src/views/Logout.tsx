import { string } from 'io-ts'
import React from 'react'
import { Button, component, useRouter } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { sessionApi } from '../common'
import { useAuth } from '../utils'

const LogoutProps = req({ redirectURL: string })

export const Logout = component(LogoutProps, ({ redirectURL }) => {
  const { isLoggedIn, logout } = useAuth()
  const { history } = useRouter()

  return (
    <>
      {isLoggedIn && (
        <Button
          variant="dark"
          onClick={async () => {
            await sessionApi.del('')
            logout()
            history.push(redirectURL)
          }}
        >
          Logout
        </Button>
      )}
    </>
  )
})