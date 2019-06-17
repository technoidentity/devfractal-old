import React from 'react'
import { classNamesHelper, El, Helpers } from '../lib'

type MenuSize = 'small' | 'medium' | 'large'

export interface MenuProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  /**
   * To resize the Menu Content
   */
  readonly size?: MenuSize
}

export const Menu: React.FC<MenuProps> = ({ size, children, ...props }) => {
  const classes: string = classNamesHelper(props, 'menu', {
    [`is-${size}`]: size,
  })
  return (
    <El as="aside" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface MenuLabelProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const MenuLabel: React.FC<MenuLabelProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'menu-label')
  return (
    <El as="p" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface MenuListProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const MenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'menu-list')
  return (
    <El as="ul" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface MenuItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly href?: string
  readonly active?: boolean
}

export const MenuItem: React.FC<MenuItemProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    'is-active': active,
  })
  return (
    <El as="li" {...props} className={classes}>
      {children}
    </El>
  )
}

// tslint:disable-next-line: no-default-export
export default MenuLabel
