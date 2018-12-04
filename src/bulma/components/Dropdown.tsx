import * as React from 'react'
import classNames from 'classnames'

type DropDownModifier = 'hoverable' | 'active'

type DropDownAlignment = 'right' | 'up'

interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly modifier?: DropDownModifier
  readonly alignment?: DropDownAlignment
}

export const DropDown: React.SFC<DropDownProps> = ({
  modifier,
  alignment,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'dropdown',
    {
      [`is-${modifier}`]: modifier,
      [`is-${alignment}`]: alignment,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
interface DropDownMenuProps extends React.HTMLAttributes<HTMLElement> {
  readonly id?: string
  readonly role?: string
}

export const DropDownMenu: React.SFC<DropDownMenuProps> = ({
  role,
  id,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('dropdown-menu', className)
  return (
    <div {...props} className={classes} id={id} role={role}>
      {children}
    </div>
  )
}
interface DropDownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly active?: boolean
}

export const DropDownItem: React.SFC<DropDownItemProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'dropdown-item',
    {
      [`is-active`]: active,
    },
    className,
  )
  return (
    <a {...props} className={classes}>
      {children}
    </a>
  )
}

interface DropDownTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DropDownTrigger: React.SFC<DropDownTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('dropdown-trigger', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface DropDownContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DropDownContent: React.SFC<DropDownContentProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('dropdown-content', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface DropDownDividerProps extends React.HTMLAttributes<HTMLElement> {}

export const DropDownDivider: React.SFC<DropDownDividerProps> = ({
  className,
  ...props
}) => {
  const classes: string = classNames('dropdown-divider', className)
  return <hr {...props} className={classes} />
}
