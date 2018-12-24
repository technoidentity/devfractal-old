import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

interface PanelProps extends React.HTMLAttributes<HTMLElement>, CommonHelpers {}

export const Panel: React.SFC<PanelProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'panel',
    className,
    commonHelpersClasses(props),
  )
  return (
    <nav {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </nav>
  )
}

interface PanelHeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const PanelHeading: React.SFC<PanelHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'panel-heading',
    className,
    commonHelpersClasses(props),
  )
  return (
    <p {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </p>
  )
}

interface PanelBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly active?: boolean
}

export const PanelBlock: React.SFC<PanelBlockProps> = ({
  children,
  active,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'panel-block',
    {
      [`is-active`]: active,
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
interface PanelTabsItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {
  readonly active?: boolean
}

export const PanelTabsItem: React.SFC<PanelTabsItemProps> = ({
  active,
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
    <a {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </a>
  )
}

interface PanelTabsProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const PanelTabs: React.SFC<PanelTabsProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'panel-tabs',
    className,
    commonHelpersClasses(props),
  )
  return (
    <p {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </p>
  )
}
