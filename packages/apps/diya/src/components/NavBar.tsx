import React from 'react'
import {
  Column,
  Columns,
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
import { AuthUserInfo, isAuthenticated } from '../common'

export const NavBar = () => {
  const { logout, setUser } = useAuth()
  const { push } = useHistory()
  const user: AuthUserInfo = isAuthenticated()
  return user ? (
    <Columns>
      <Column>
        <Navbar shadowLess>
          <NavbarEnd>
            <NavbarItem dropDown modifier="hoverable">
              <NavbarLink>{capitalizeAll(user.data.user.role, '_')}</NavbarLink>
              <Column>
                <NavbarDropDown>
                  <NavbarItem>{user.data.user.name}</NavbarItem>
                  <NavbarItem>{user.data.user.email}</NavbarItem>
                  <NavbarItem>{user.data.user.phone}</NavbarItem>
                  <NavbarDivider />
                  <NavbarLink
                    display="flex"
                    arrowLess
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
              </Column>
            </NavbarItem>
          </NavbarEnd>
        </Navbar>
      </Column>
    </Columns>
  ) : (
    <p>{}</p>
  )
}
