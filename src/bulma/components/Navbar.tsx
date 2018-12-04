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

type NavbarModifier = 'transparent' | 'fixed-top' | 'fixed-bottom'
interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly color?: NavbarColor
  readonly modifier?: NavbarModifier
}

export const Navbar: React.SFC<NavbarProps> = ({
  color,
  modifier,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'navbar',
    {
      [`is-${color}`]: color,
      [`is-${modifier}`]: modifier,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarBrand: React.SFC<NavbarBrandProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('navbar-brand', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const NavbarBurger: React.SFC<NavbarBurgerProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('navbar-burger', className)
  return (
    <a {...props} className={classes} aria-label="menu" aria-expanded="false">
      {children}
    </a>
  )
}

type NavbarItemModifier = 'expanded' | 'tab' | 'active' | 'hoverable'
interface NavBarItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly dropdown?: boolean
  readonly dropdownup?: boolean
  readonly href?: string
  readonly modifier?: NavbarItemModifier
}

export const NavbarItem: React.SFC<NavBarItemsProps> = ({
  href,
  dropdown,
  dropdownup,
  modifier,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'navbar-item',
    {
      href: { href },
      [`has-dropdown-up`]: dropdownup,
      [`has-dropdown`]: dropdown,
      [`is-${modifier}`]: modifier,
    },
    className,
  )
  return (
    <div
      {...props}
      className={classes}
      role="navigation"
      aria-label="main navigation"
    >
      {children}
    </div>
  )
}

interface NavBarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly active?: boolean
}

export const NavbarMenu: React.SFC<NavBarMenuProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'navbar-menu',
    {
      [`is-active`]: active,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

type NavbarDropdownModifier = 'boxed'
interface NavbarDropdownprops extends React.HTMLAttributes<HTMLDivElement> {
  readonly modifier?: NavbarDropdownModifier
}

export const NavbarDropdown: React.SFC<NavbarDropdownprops> = ({
  modifier,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'navbar-dropdown',
    {
      [`is-${modifier}`]: modifier,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

type NavbarLinkModifier = 'arrowless'
interface NavBarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly modifier?: NavbarLinkModifier
}

export const NavbarLink: React.SFC<NavBarLinkProps> = ({
  modifier,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'navbar-link',
    {
      [`is-${modifier}`]: modifier,
    },
    className,
  )
  return (
    <a {...props} className={classes}>
      {children}
    </a>
  )
}

interface NavbarStartProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarStart: React.SFC<NavbarStartProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('navbar-start', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface NavbarEndProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarEnd: React.SFC<NavbarEndProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('navbar-end', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface NavbarDividerProps extends React.HTMLAttributes<HTMLElement> {}

export const NavbarDivider: React.SFC<NavbarDividerProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('navbar-divider', className)
  return (
    <hr {...props} className={classes}>
      {children}
    </hr>
  )
}
