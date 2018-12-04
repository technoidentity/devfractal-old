import * as React from 'react'
import classNames from 'classnames'

interface MenuProps extends React.HTMLAttributes<HTMLElement> {}

export const Menu: React.SFC<MenuProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('menu', className)
  return (
    <aside {...props} className={classes}>
      {children}
    </aside>
  )
}

interface MenuLabelProps extends React.HTMLAttributes<HTMLElement> {}

export const MenuLabel: React.SFC<MenuLabelProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('menu-label', className)
  return (
    <p {...props} className={classes}>
      {children}
    </p>
  )
}

interface MenuListProps extends React.HTMLAttributes<HTMLElement> {}

export const MenuList: React.SFC<MenuListProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('menu-list', className)
  return (
    <ul {...props} className={classes}>
      {children}
    </ul>
  )
}

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  readonly href?: string
  readonly active?: boolean
}

export const MenuItem: React.SFC<MenuItemProps> = ({
  active,
  href,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    {
      [`is-active`]: active,
    },
    className,
  )
  return (
    <li {...props} className={classes}>
      {children}
    </li>
  )
}
