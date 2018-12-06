import * as React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd,
} from '../components/Navbar'
import { Buttons, Button } from '../Button'
import { logger } from './common'

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

        <NavbarItem dropdown className="is-hoverable">
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
            <Button color="primary" onClick={() => logger('signup')}>
              Sign up
            </Button>
            <Button color="light" onClick={() => logger('login')}>
              Log in
            </Button>
          </Buttons>
        </NavbarItem>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
)
