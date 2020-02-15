import React from 'react'
import { Link, useLocation } from 'technoidentity-router'
import { chop } from 'technoidentity-utils'
import { classNamesHelper, El, Helpers } from '../core'

type MenuSize = 'small' | 'medium' | 'large'

export interface MenuProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  /**
   * To resize the Menu Content
   */
  readonly size?: MenuSize
  readonly baseURL?: string
}

export const Menu: React.FC<MenuProps> = ({
  size,
  baseURL,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'menu', {
    [`is-${size}`]: size,
  })
  return (
    <El as="aside" {...props} className={classes}>
      <ul>
        {React.Children.map(children, (child: any) =>
          React.cloneElement(
            child,
            baseURL ? { href: `${chop(baseURL)}/${child.props.value}` } : {},
          ),
        )}
      </ul>
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
  readonly value?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({
  href,
  active,
  children,
  ...props
}) => {
  const { pathname } = useLocation()

  const classes: string = classNamesHelper(props, {
    'is-active': active || (href && chop(pathname).startsWith(chop(href))),
  })

  return (
    <El as="li" {...props}>
      {
        <Link to={href || '#'} className={classes}>
          {children}
        </Link>
      }
    </El>
  )
}
