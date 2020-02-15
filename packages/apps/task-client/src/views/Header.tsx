import React from 'react'
import { Navbar, NavbarEnd, NavbarItem } from 'technoidentity-ui'
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
