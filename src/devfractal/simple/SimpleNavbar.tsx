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
} from '../components'

const NavBurger: React.SFC<NavbarBurgerProps> = props => (
  <NavbarBurger role="button" {...props}>
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </NavbarBurger>
)

const NavBrand: React.SFC<NavbarBrandProps> = ({ children, ...props }) => (
  <NavbarBrand {...props}>
    <NavLink to="/">{children}</NavLink>
    <NavBurger />
  </NavbarBrand>
)

const NavItem: React.SFC<NavbarItemsProps & { readonly to: string }> = ({
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
