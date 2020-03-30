import React from 'react'
import { Navbar, NavbarEnd, NavbarItem } from 'srtp-ui'
import { Logout } from './Logout'

export const Header: React.FC = () => (
  <Navbar>
    <NavbarEnd>
      <NavbarItem>
        <Logout redirectTo={'/'} />
      </NavbarItem>
    </NavbarEnd>
  </Navbar>
)
