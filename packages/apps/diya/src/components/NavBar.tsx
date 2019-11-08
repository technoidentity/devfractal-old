import React from 'react'
import {
  Navbar,
  NavbarDivider,
  NavbarDropDown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
} from 'technoidentity-devfractal'
import { capitalizeAll } from 'technoidentity-utils'
import { useAuth } from '../auth/AuthContext'

export const NavBar = () => {
  const logData = useAuth()
  console.log(logData)
  return (
    <Navbar shadowLess>
      <NavbarEnd>
        <NavbarItem dropDown modifier="hoverable">
          <NavbarLink>
            {capitalizeAll(logData.user.data.user.role, '_')}
          </NavbarLink>
          <NavbarDropDown>
            <NavbarItem>{logData.user.data.user.name}</NavbarItem>
            <NavbarItem>{logData.user.data.user.email}</NavbarItem>
            <NavbarItem>{logData.user.data.user.phone}</NavbarItem>
            <NavbarDivider />
            <NavbarLink
              onClick={() => {
                logData.setUser({ ...logData.user })
                logData.logout()
              }}
            >
              Logout
            </NavbarLink>
          </NavbarDropDown>
        </NavbarItem>
      </NavbarEnd>
    </Navbar>
  )
}
