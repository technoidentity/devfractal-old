import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type MenuSize = 'small' | 'medium' | 'large'

export interface MenuProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly size?: MenuSize
}

export const Menu: React.SFC<MenuProps> = ({ size, children, ...props }) => {
  const classes: string = classNamesHelper(props, 'menu', {
    [`is-${size}`]: size,
  })
  return (
    <Div as="aside" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface MenuLabelProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const MenuLabel: React.SFC<MenuLabelProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'menu-label')
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface MenuListProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const MenuList: React.SFC<MenuListProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'menu-list')
  return (
    <Div as="ul" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface MenuItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly href?: string
  readonly active?: boolean
}

export const MenuItem: React.SFC<MenuItemProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    'is-active': active,
  })
  return (
    <Div as="li" {...props} className={classes}>
      {children}
    </Div>
  )
}
