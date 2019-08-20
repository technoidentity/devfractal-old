import { Navbar, NavbarEnd, NavbarItem } from 'devfractal-ui-core'
import React from 'react'
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
