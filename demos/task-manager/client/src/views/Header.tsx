import React from 'react'
import { Navbar, NavbarEnd, NavbarItem } from 'technoidentity-devfractal'
import { Logout } from './Logout'

export const Header: React.FC = () => (
  <Navbar>
    <NavbarEnd>
      <NavbarItem>
        <Logout redirectURL={'/'} />
      </NavbarItem>
    </NavbarEnd>
  </Navbar>
)
