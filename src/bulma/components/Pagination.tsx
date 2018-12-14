import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../commonHelpers'

interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {
  readonly rounded?: boolean
  readonly size?: 'small' | 'medium' | 'large'
}

export const Pagination: React.SFC<PaginationProps> = ({
  rounded,
  size,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'pagination',
    {
      [`is-${size}`]: size,
      [`is-rounded`]: rounded,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <nav
      {...propsCommonHelpersRemoved}
      className={classes}
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </nav>
  )
}

interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {
  readonly current?: boolean
}

export const PaginationLink: React.SFC<PaginationLinkProps> = ({
  current,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'pagination-link',
    {
      [`is-current`]: current,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <li>
      <a {...propsCommonHelpersRemoved} className={classes}>
        {children}
      </a>
    </li>
  )
}

interface PaginationListProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const PaginationList: React.SFC<PaginationListProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'pagination-list',
    className,
    commonHelpersClasses(props),
  )
  return (
    <ul {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </ul>
  )
}
interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    CommonHelpers {}

export const PaginationEllipsis: React.SFC<PaginationEllipsisProps> = ({
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'pagination-ellipsis',
    className,
    commonHelpersClasses(props),
  )
  return (
    <li>
      <span {...propsCommonHelpersRemoved} className={classes}>
        &hellip;
      </span>
    </li>
  )
}
interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {}

export const PaginationPrevious: React.SFC<PaginationPreviousProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'pagination-previous',
    className,
    commonHelpersClasses(props),
  )
  return (
    <a {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </a>
  )
}

interface PaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {}

export const PaginationNext: React.SFC<PaginationNextProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'pagination-next',
    className,
    commonHelpersClasses(props),
  )
  return (
    <a {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </a>
  )
}
