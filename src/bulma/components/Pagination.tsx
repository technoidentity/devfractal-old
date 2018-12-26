import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface PaginationProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly rounded?: boolean
  readonly size?: 'small' | 'medium' | 'large'
}

export const Pagination: React.SFC<PaginationProps> = ({
  rounded,
  size,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination', {
    [`is-${size}`]: size,
    [`is-rounded`]: rounded,
  })
  return (
    <Div
      as="nav"
      {...props}
      className={classes}
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </Div>
  )
}

interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly current?: boolean
}

export const PaginationLink: React.SFC<PaginationLinkProps> = ({
  current,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-link', {
    [`is-current`]: current,
  })
  return (
    <li>
      <Div as="a" {...props} className={classes}>
        {children}
      </Div>
    </li>
  )
}

interface PaginationListProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const PaginationList: React.SFC<PaginationListProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-list')
  return (
    <Div as="ul" {...props} className={classes}>
      {children}
    </Div>
  )
}
interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Helpers {}

export const PaginationEllipsis: React.SFC<PaginationEllipsisProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-ellipsis')
  return (
    <li>
      <span {...props} className={classes}>
        &hellip;
      </span>
    </li>
  )
}
interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {}

export const PaginationPrevious: React.SFC<PaginationPreviousProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-previous')
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

interface PaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {}

export const PaginationNext: React.SFC<PaginationNextProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-next')
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}
