import * as React from 'react'
import classNames from 'classnames'

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
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
  const classes: string = classNames(
    'pagination',
    {
      [`is-${size}`]: size,
      [`is-rounded`]: rounded,
    },
    className,
  )
  return (
    <nav
      {...props}
      className={classes}
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </nav>
  )
}

interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly current?: boolean
}

export const PaginationLink: React.SFC<PaginationLinkProps> = ({
  current,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'pagination-link',
    {
      [`is-current`]: current,
    },
    className,
  )
  return (
    <li>
      <a {...props} className={classes}>
        {children}
      </a>
    </li>
  )
}

interface PaginationListProps extends React.HTMLAttributes<HTMLElement> {}

export const PaginationList: React.SFC<PaginationListProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('pagination-list', className)
  return (
    <ul {...props} className={classes}>
      {children}
    </ul>
  )
}
interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const PaginationEllipsis: React.SFC<PaginationEllipsisProps> = ({
  className,
  ...props
}) => {
  const classes: string = classNames('pagination-ellipsis', className)
  return (
    <li>
      <span {...props} className={classes}>
        &hellip;
      </span>
    </li>
  )
}
interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const PaginationPrevious: React.SFC<PaginationPreviousProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('pagination-previous', className)
  return (
    <a {...props} className={classes}>
      {children}
    </a>
  )
}

interface PaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const PaginationNext: React.SFC<PaginationNextProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('pagination-next', className)
  return (
    <a {...props} className={classes}>
      {children}
    </a>
  )
}
