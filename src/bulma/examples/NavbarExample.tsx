import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
} from '../components/Navbar'
import { Button, Buttons } from '../form/Button'

export const NavbarExample: React.SFC = () => (
  <Navbar>
    <NavbarBrand>
      <NavbarItem>
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </NavbarItem>
      <NavbarBurger role="button">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </NavbarBurger>
    </NavbarBrand>

    <NavbarMenu>
      <NavbarStart>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem modifier="active">Documentation</NavbarItem>
        <NavbarItem dropdown modifier="hoverable">
          <NavbarLink>More</NavbarLink>
          <NavbarDropdown>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Jobs</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
            <NavbarDivider />
            <NavbarItem>Report an issue</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
      </NavbarStart>
      <NavbarEnd>
        <NavbarItem>
          <Buttons>
            <Button variant="primary">Sign up</Button>
            <Button variant="light">Log in</Button>
          </Buttons>
        </NavbarItem>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
)
