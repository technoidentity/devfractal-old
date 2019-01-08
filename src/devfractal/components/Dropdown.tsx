import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type DropDownModifier = 'hoverable' | 'active'

export interface DropDownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly modifier?: DropDownModifier
  readonly rightAligned?: boolean
  readonly dropUp?: boolean
}

export const DropDown: React.SFC<DropDownProps> = ({
  modifier,
  rightAligned,
  dropUp,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown', {
    [`is-${modifier}`]: modifier,
    [`is-right`]: rightAligned,
    [`is-up`]: dropUp,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
export interface DropDownMenuProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly id?: string
  readonly role?: string
}

export const DropDownMenu: React.SFC<DropDownMenuProps> = ({
  role,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-menu')
  return (
    <Div {...props} className={classes} role={role}>
      {children}
    </Div>
  )
}
export interface DropDownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const DropDownItem: React.SFC<DropDownItemProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-item', {
    [`is-active`]: active,
  })
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface DropDownTriggerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const DropDownTrigger: React.SFC<DropDownTriggerProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-trigger')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface DropDownContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const DropDownContent: React.SFC<DropDownContentProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-content')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface DropDownDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const DropDownDivider: React.SFC<DropDownDividerProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-divider')
  return <Div as="hr" {...props} className={classes} />
}
