import { string, TypeOf } from 'io-ts'
import React from 'react'
import { Button, component, useRouter } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { sessionApi } from '../common'
import { useAuth } from '../utils'

const LogoutProps = req({ redirectURL: string })
type LogoutProps = TypeOf<typeof LogoutProps>

export const Logout: React.FC<LogoutProps> = component(
  LogoutProps,
  ({ redirectURL }) => {
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
  },
)
