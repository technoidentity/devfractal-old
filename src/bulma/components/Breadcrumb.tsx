import * as React from 'react'
import classNames from 'classnames'

import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator =
  | 'arrow-separator'
  | 'bullet-separator'
  | 'dot-separator'
  | 'succeeds-separator'

interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    CommonHelpers {
  readonly href?: string
  readonly active?: boolean
}

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = ({
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
      <a href={href}>{children}</a>
    </li>
  )
}

interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {
  readonly size?: BreadcrumbSize
  readonly alignment?: BreadcrumbAlignment
  readonly separator?: BreadcrumbSeparator
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  alignment,
  size,
  separator,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'breadcrumb',
    {
      [`is-${alignment}`]: alignment,
      [`is-${size}`]: size,
      [`has-${separator}`]: separator,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <nav
      {...propsCommonHelpersRemoved}
      className={classes}
      aria-label="breadcrumbs"
    >
      <ul>{children}</ul>
    </nav>
  )
}
