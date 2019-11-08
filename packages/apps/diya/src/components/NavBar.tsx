import React from 'react'
import {
  Navbar,
  NavbarDivider,
  NavbarDropDown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  useHistory,
} from 'technoidentity-devfractal'
import { capitalizeAll } from 'technoidentity-utils'
import { useAuth } from '../auth/AuthContext'
import { isAuthenticated } from '../auth/util'
import { AuthUserInfo } from '../common'

export const NavBar = () => {
  const { logout, setUser } = useAuth()
  const { push } = useHistory()
  const user: AuthUserInfo = isAuthenticated()
  return user ? (
    <Navbar shadowLess>
      <NavbarEnd>
        <NavbarItem dropDown modifier="hoverable">
          <NavbarLink>{capitalizeAll(user.data.user.role, '_')}</NavbarLink>
          <NavbarDropDown>
            <NavbarItem>{user.data.user.name}</NavbarItem>
            <NavbarItem>{user.data.user.email}</NavbarItem>
            <NavbarItem>{user.data.user.phone}</NavbarItem>
            <NavbarDivider />
            <NavbarLink
              onClick={() => {
                // tslint:disable-next-line:no-null-keyword
                setUser(null)
                logout()
                push('/')
              }}
            >
              Logout
            </NavbarLink>
          </NavbarDropDown>
        </NavbarItem>
      </NavbarEnd>
    </Navbar>
  ) : (
    <p>{}</p>
  )
}
