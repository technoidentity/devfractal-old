import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type NavbarVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'warning'
  | 'danger'
  | 'success'
  | 'white'
  | 'light'
  | 'dark'
  | 'black'

type NavbarModifier = 'transparent' | 'fixed-top' | 'fixed-bottom'

export interface NavbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly variant?: NavbarVariant
  readonly modifier?: NavbarModifier
}

export const Navbar: React.SFC<NavbarProps> = ({
  variant,
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar', {
    [`is-${variant}`]: variant,
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarBrandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarBrand: React.SFC<NavbarBrandProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-brand')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {}

export const NavbarBurger: React.SFC<NavbarBurgerProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-burger')
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

type NavbarItemModifier = 'expanded' | 'tab' | 'active' | 'hoverable'
export interface NavbarItemsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly dropdown?: boolean
  readonly dropdownup?: boolean
  readonly href?: string
  readonly modifier?: NavbarItemModifier
}

export const NavbarItem: React.SFC<NavbarItemsProps> = ({
  href,
  dropdown,
  dropdownup,
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-item', {
    href: { href },
    [`has-dropdown-up`]: dropdownup,
    [`has-dropdown`]: dropdown,
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div
      {...props}
      className={classes}
      role="navigation"
      aria-label="main navigation"
    >
      {children}
    </Div>
  )
}

export interface NavbarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly active?: boolean
}

export const NavbarMenu: React.SFC<NavbarMenuProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-menu', {
    [`is-active`]: active,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

type NavbarDropdownModifier = 'boxed'
export interface NavbarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly modifier?: NavbarDropdownModifier
}

export const NavbarDropdown: React.SFC<NavbarDropdownProps> = ({
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-dropdown', {
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

type NavbarLinkModifier = 'arrowless'
export interface NavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly modifier?: NavbarLinkModifier
}

export const NavbarLink: React.SFC<NavbarLinkProps> = ({
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-link', {
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarStartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarStart: React.SFC<NavbarStartProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-start')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarEndProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarEnd: React.SFC<NavbarEndProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-end')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const NavbarDivider: React.SFC<NavbarDividerProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-divider')
  return (
    <Div as="hr" {...props} className={classes}>
      {children}
    </Div>
  )
}
