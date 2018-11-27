import * as React from 'react'
import classNames from 'classnames'

type NavbarColor =
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

interface NavbarProps {
  readonly color?: NavbarColor
  readonly transparent?: boolean
}

interface NavBarItemsProps {
  readonly dropdown?: boolean
  readonly dropdownup?: boolean
  readonly hoverable?: boolean
  readonly href?: string
  readonly active?: boolean
  readonly children: React.ReactNode
}

interface NavBarMenuProps {
  readonly active?: boolean
  readonly children: React.ReactNode
}

interface NavbarDropdownprops {
  readonly boxed?: boolean
  readonly children: React.ReactNode
}

interface NavBarLinkProps {
  readonly arrowless?: boolean
  readonly children: React.ReactNode
}

export const Navbar: React.SFC<NavbarProps> = ({
  color,
  transparent,
  children,
}) => {
  const classes: string = classNames('navbar', {
    [`is-${color}`]: color,
    'is-transparent': transparent,
  })
  return <div className={classes}>{children}</div>
}

export const NavbarBrand: React.SFC = ({ children }) => (
  <div className="navbar-brand">{children}</div>
)

export const NavbarItem: React.SFC<NavBarItemsProps> = ({
  href,
  dropdown,
  dropdownup,
  hoverable,
  active,
  children,
}) => {
  const classes: string = classNames('navbar-item', {
    href: { href },
    'has-dropdown-up': dropdownup,
    'has-dropdown': dropdown,
    'is-hoverable': hoverable,
    'is-active': active,
  })
  return (
    <div className={classes} role="navigation" aria-label="main navigation">
      {children}
    </div>
  )
}

export const NavbarBurger: React.SFC = ({ children }) => (
  <div className="navbar-burger" aria-label="menu" aria-expanded="false">
    {children}
  </div>
)

export const NavbarMenu: React.SFC<NavBarMenuProps> = ({
  active,
  children,
}) => {
  const classes: string = classNames('navbar-menu', {
    'is-active': active,
  })
  return <div className={classes}>{children}</div>
}

export const NavbarStart: React.SFC = ({ children }) => (
  <div className="navbar-start">{children}</div>
)

export const NavbarEnd: React.SFC = ({ children }) => (
  <div className="navbar-end">{children}</div>
)

export const NavbarLink: React.SFC<NavBarLinkProps> = ({
  arrowless,
  children,
}) => {
  const classes: string = classNames('navbar-link', {
    'is-arrowless': arrowless,
  })
  return <a className={classes}>{children}</a>
}

export const NavbarDropdown: React.SFC<NavbarDropdownprops> = ({
  boxed,
  children,
}) => {
  const classes: string = classNames('navbar-dropdown', {
    'is-boxed': boxed,
  })
  return <div className={classes}>{children}</div>
}

export const NavbarDivider: React.SFC = ({ children }) => (
  <hr className="navbar-divider">{children}</hr>
)
