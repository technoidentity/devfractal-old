import React, { useContext, useState } from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

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

export const Navbar: React.SFC<NavbarProps> = ({
  variant,
  modifier,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false)
  const classes: string = classNamesHelper(props, 'navbar', {
    [`is-${variant}`]: variant,
    [`is-${modifier}`]: modifier,
  })
  return (
    <NavbarContext.Provider value={{ visible, setVisible }}>
      <Div {...props} className={classes}>
        {children}
      </Div>
    </NavbarContext.Provider>
  )
}

export interface NavbarBrandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarBrand: React.SFC<NavbarBrandProps> = ({
  children,
  ...props
}) => (
  <Div {...props} className={classNamesHelper(props, 'navbar-brand')}>
    {children}
  </Div>
)

export interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const NavbarBurger: React.SFC<NavbarBurgerProps> = ({
  active,
  children,
  ...props
}) => {
  const { visible, setVisible } = useContext(NavbarContext)

  const classes: string = classNamesHelper(props, 'navbar-burger', 'burger', {
    'is-active': active || visible,
  })

  return (
    <Div
      as="a"
      {...props}
      className={classes}
      onClick={() => setVisible && setVisible(!visible)}
    >
      {children}
    </Div>
  )
}

type NavbarItemModifier = 'expanded' | 'tab' | 'hoverable'

type NavbarItemTag = 'div' | 'a'
export interface NavbarItemsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly dropdown?: boolean
  readonly as?: NavbarItemTag
  readonly active?: boolean
  readonly dropUp?: boolean
  readonly href?: string
  readonly modifier?: NavbarItemModifier
}

export const NavbarItem: React.SFC<NavbarItemsProps> = ({
  href,
  active,
  as,
  dropdown,
  dropUp,
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-item', {
    href: { href },
    'is-active': active,
    'has-dropdown-up': dropUp,
    'has-dropdown': dropdown,
    [`is-${modifier}`]: modifier,
  })

  return (
    <Div
      as={as}
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
  const { visible, setVisible } = useContext(NavbarContext)

  const classes: string = classNamesHelper(props, 'navbar-menu', {
    'is-active': active || visible,
  })

  return (
    <Div
      {...props}
      className={classes}
      onClick={() => setVisible && setVisible(!visible)}
    >
      {children}
    </Div>
  )
}

export interface NavbarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly boxed?: boolean
}

export const NavbarDropdown: React.SFC<NavbarDropdownProps> = ({
  boxed,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-dropdown', {
    [`is-boxed`]: boxed,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly arrowLess?: boolean
}

export const NavbarLink: React.SFC<NavbarLinkProps> = ({
  arrowLess,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-link', {
    [`is-arrowless`]: arrowLess,
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
}) => (
  <Div {...props} className={classNamesHelper(props, 'navbar-start')}>
    {children}
  </Div>
)

export interface NavbarEndProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarEnd: React.SFC<NavbarEndProps> = ({
  children,
  ...props
}) => (
  <Div {...props} className={classNamesHelper(props, 'navbar-end')}>
    {children}
  </Div>
)

export interface NavbarDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const NavbarDivider: React.SFC<NavbarDividerProps> = ({
  children,
  ...props
}) => (
  <Div as="hr" {...props} className={classNamesHelper(props, 'navbar-divider')}>
    {children}
  </Div>
)
