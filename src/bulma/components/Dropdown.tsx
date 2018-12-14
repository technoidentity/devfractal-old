import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../commonHelpers'

type DropDownModifier = 'hoverable' | 'active'

type DropDownAlignment = 'right' | 'up'

interface DropDownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
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
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'dropdown',
    {
      [`is-${modifier}`]: modifier,
      [`is-${alignment}`]: alignment,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
interface DropDownMenuProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {
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
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'dropdown-menu',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes} id={id} role={role}>
      {children}
    </div>
  )
}
interface DropDownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {
  readonly active?: boolean
}

export const DropDownItem: React.SFC<DropDownItemProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'dropdown-item',
    {
      [`is-active`]: active,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <a {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </a>
  )
}

interface DropDownTriggerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const DropDownTrigger: React.SFC<DropDownTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'dropdown-trigger',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface DropDownContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const DropDownContent: React.SFC<DropDownContentProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'dropdown-content',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface DropDownDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const DropDownDivider: React.SFC<DropDownDividerProps> = ({
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'dropdown-divider',
    className,
    commonHelpersClasses(props),
  )
  return <hr {...propsCommonHelpersRemoved} className={classes} />
}
