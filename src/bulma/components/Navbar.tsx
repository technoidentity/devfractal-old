import React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

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

interface NavbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly variant?: NavbarVariant
  readonly modifier?: NavbarModifier
}

export const Navbar: React.SFC<NavbarProps> = ({
  variant,
  modifier,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar',
    {
      [`is-${variant}`]: variant,
      [`is-${modifier}`]: modifier,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface NavbarBrandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const NavbarBrand: React.SFC<NavbarBrandProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-brand',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {}

export const NavbarBurger: React.SFC<NavbarBurgerProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-burger',
    className,
    commonHelpersClasses(props),
  )
  return (
    <a
      {...propsCommonHelpersRemoved}
      className={classes}
      aria-label="menu"
      aria-expanded="false"
    >
      {children}
    </a>
  )
}

type NavbarItemModifier = 'expanded' | 'tab' | 'active' | 'hoverable'
interface NavBarItemsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
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
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-item',
    {
      href: { href },
      [`has-dropdown-up`]: dropdownup,
      [`has-dropdown`]: dropdown,
      [`is-${modifier}`]: modifier,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div
      {...propsCommonHelpersRemoved}
      className={classes}
      role="navigation"
      aria-label="main navigation"
    >
      {children}
    </div>
  )
}

interface NavBarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly active?: boolean
}

export const NavbarMenu: React.SFC<NavBarMenuProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-menu',
    {
      [`is-active`]: active,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

type NavbarDropdownModifier = 'boxed'
interface NavbarDropdownprops
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly modifier?: NavbarDropdownModifier
}

export const NavbarDropdown: React.SFC<NavbarDropdownprops> = ({
  modifier,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-dropdown',
    {
      [`is-${modifier}`]: modifier,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

type NavbarLinkModifier = 'arrowless'
interface NavBarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {
  readonly modifier?: NavbarLinkModifier
}

export const NavbarLink: React.SFC<NavBarLinkProps> = ({
  modifier,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-link',
    {
      [`is-${modifier}`]: modifier,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <a {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </a>
  )
}

interface NavbarStartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const NavbarStart: React.SFC<NavbarStartProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-start',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface NavbarEndProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const NavbarEnd: React.SFC<NavbarEndProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-end',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface NavbarDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const NavbarDivider: React.SFC<NavbarDividerProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'navbar-divider',
    className,
    commonHelpersClasses(props),
  )
  return (
    <hr {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </hr>
  )
}
