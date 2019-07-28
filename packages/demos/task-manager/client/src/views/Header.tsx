import React from 'react'
import {
  Navbar,
  NavbarEnd,
  NavbarItem,
} from 'technoidentity-devfractal-ui-core'
import { Logout } from './Logout'

export const Header: React.FC = () => (
  <Navbar>
    <NavbarEnd>
      <NavbarItem>
        <Logout redirectPath={'/'} />
      </NavbarItem>
    </NavbarEnd>
  </Navbar>
)
