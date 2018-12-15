import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

interface MenuProps extends React.HTMLAttributes<HTMLElement>, CommonHelpers {}

export const Menu: React.SFC<MenuProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'menu',
    className,
    commonHelpersClasses(props),
  )
  return (
    <aside {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </aside>
  )
}

interface MenuLabelProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const MenuLabel: React.SFC<MenuLabelProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'menu-label',
    className,
    commonHelpersClasses(props),
  )
  return (
    <p {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </p>
  )
}

interface MenuListProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const MenuList: React.SFC<MenuListProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'menu-list',
    className,
    commonHelpersClasses(props),
  )
  return (
    <ul {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </ul>
  )
}

interface MenuItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    CommonHelpers {
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
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    {
      [`is-active`]: active,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <li {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </li>
  )
}
