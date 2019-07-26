import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarBrandProps,
  NavbarBurger,
  NavbarBurgerProps,
  NavbarEnd,
  NavbarItem,
  NavbarItemsProps,
  NavbarMenu,
} from 'technoidentity-devfractal-ui-core'

const NavBurger: React.FC<NavbarBurgerProps> = props => (
  <NavbarBurger role="button" {...props}>
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </NavbarBurger>
)

const NavBrand: React.FC<NavbarBrandProps> = ({ children, ...props }) => (
  <NavbarBrand {...props}>
    <NavLink to="/">{children}</NavLink>
    <NavBurger />
  </NavbarBrand>
)

const NavItem: React.FC<NavbarItemsProps & { readonly to: string }> = ({
  to,
  children,
  ...props
}) => (
  <NavbarItem {...props}>
    <NavLink to={to}>{children}</NavLink>
  </NavbarItem>
)

export {
  NavBrand,
  NavItem,
  Navbar as Nav,
  NavbarEnd as NavEnd,
  NavbarMenu as NavMenu,
}
