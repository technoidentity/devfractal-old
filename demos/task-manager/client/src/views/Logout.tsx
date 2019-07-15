import { string } from 'io-ts'
import React from 'react'
import { Button, component, useRouter } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { sessionApi } from '../common'
import { useAuth } from '../utils'

const LogoutProps = req({ redirectPath: string })

export const Logout = component(LogoutProps, ({ redirectPath }) => {
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
            history.push(redirectPath)
          }}
        >
          Logout
        </Button>
      )}
    </>
  )
})
