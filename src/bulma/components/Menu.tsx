import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface MenuProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const Menu: React.SFC<MenuProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'menu')
  return (
    <Div as="aside" {...props} className={classes}>
      {children}
    </Div>
  )
}

interface MenuLabelProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const MenuLabel: React.SFC<MenuLabelProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'menu-label')
  return (
    <p {...props} className={classes}>
      {children}
    </p>
  )
}

interface MenuListProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const MenuList: React.SFC<MenuListProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'menu-list')
  return (
    <Div as="ul" {...props} className={classes}>
      {children}
    </Div>
  )
}

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Helpers {
  readonly href?: string
  readonly active?: boolean
}

export const MenuItem: React.SFC<MenuItemProps> = ({
  active,
  href,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    [`is-active`]: active,
  })
  return (
    <Div as="li" {...props} className={classes}>
      {children}
    </Div>
  )
}
