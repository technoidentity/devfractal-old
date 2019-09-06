import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

interface NavbarContext {
  readonly visible?: boolean
  setVisible?(visible: boolean): void
}

const NavbarContext: React.Context<NavbarContext> = React.createContext({})

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

export const Navbar: React.FC<NavbarProps> = ({
  variant,
  modifier,
  children,
  ...props
}) => {
  const [visible, setVisible] = React.useState(false)
  const classes: string = classNamesHelper(props, 'navbar', {
    [`is-${variant}`]: variant,
    [`is-${modifier}`]: modifier,
  })
  return (
    <NavbarContext.Provider value={{ visible, setVisible }}>
      <El {...props} className={classes}>
        {children}
      </El>
    </NavbarContext.Provider>
  )
}

export interface NavbarBrandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarBrand: React.FC<NavbarBrandProps> = ({
  children,
  ...props
}) => (
  <El {...props} className={classNamesHelper(props, 'navbar-brand')}>
    {children}
  </El>
)

export interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const NavbarBurger: React.FC<NavbarBurgerProps> = ({
  active,
  children,
  ...props
}) => {
  const { visible, setVisible } = React.useContext(NavbarContext)

  const classes: string = classNamesHelper(props, 'navbar-burger', 'burger', {
    'is-active': active || visible,
  })

  return (
    <El
      as="a"
      {...props}
      className={classes}
      onClick={() => setVisible && setVisible(!visible)}
    >
      {children}
    </El>
  )
}

type NavbarItemModifier = 'expanded' | 'tab' | 'hoverable'

type NavbarItemTag = 'div' | 'a'

export interface NavbarItemsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly dropDown?: boolean
  readonly as?: NavbarItemTag
  readonly active?: boolean
  readonly dropUp?: boolean
  readonly href?: string
  readonly modifier?: NavbarItemModifier
}

export const NavbarItem: React.FC<NavbarItemsProps> = ({
  href,
  active,
  as,
  dropDown,
  dropUp,
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-item', {
    'is-active': active,
    'has-dropdown-up': dropUp,
    'has-dropdown': dropDown,
    [`is-${modifier}`]: modifier,
  })

  return (
    <El
      as={as}
      href={href}
      {...props}
      className={classes}
      role="navigation"
      aria-label="main navigation"
    >
      {children}
    </El>
  )
}

export interface NavbarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly active?: boolean
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({
  active,
  children,
  ...props
}) => {
  const { visible, setVisible } = React.useContext(NavbarContext)

  const classes: string = classNamesHelper(props, 'navbar-menu', {
    'is-active': active || visible,
  })

  return (
    <El
      {...props}
      className={classes}
      onClick={() => setVisible && setVisible(!visible)}
    >
      {children}
    </El>
  )
}

export interface NavbarDropDownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly boxed?: boolean
}

export const NavbarDropDown: React.FC<NavbarDropDownProps> = ({
  boxed,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-dropdown', {
    [`is-boxed`]: boxed,
  })
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

export interface NavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly arrowLess?: boolean
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  arrowLess,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-link', {
    [`is-arrowless`]: arrowLess,
  })

  return (
    <El as="a" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface NavbarStartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarStart: React.FC<NavbarStartProps> = ({
  children,
  ...props
}) => (
  <El {...props} className={classNamesHelper(props, 'navbar-start')}>
    {children}
  </El>
)

export interface NavbarEndProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarEnd: React.FC<NavbarEndProps> = ({ children, ...props }) => (
  <El {...props} className={classNamesHelper(props, 'navbar-end')}>
    {children}
  </El>
)

export interface NavbarDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const NavbarDivider: React.FC<NavbarDividerProps> = ({
  children,
  ...props
}) => (
  <El as="hr" {...props} className={classNamesHelper(props, 'navbar-divider')}>
    {children}
  </El>
)
