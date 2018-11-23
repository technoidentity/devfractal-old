import * as React from 'react'
import classNames from 'classnames'

interface Children {
  readonly children: React.ReactChild
}

interface PaginationProps {
  readonly rounded?: boolean
  readonly size?: 'small' | 'medium' | 'large'
  readonly children: React.ReactNode
}

export const PaginationPrevious: React.SFC<Children> = ({ children }) => (
  <a className="pagination-previous">{children}</a>
)

export const PaginationNext: React.SFC<Children> = ({ children }) => (
  <a className="pagination-next">{children}</a>
)

interface PaginationLinkProps {
  readonly ariaLabel?: string
  readonly current?: boolean
}

export const PaginationLink: React.SFC<PaginationLinkProps> = ({
  current,
  children,
  ariaLabel,
}) => {
  const classes: string = classNames('pagination-link', {
    'is-current': current,
  })
  return (
    <li>
      <a className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    </li>
  )
}

interface PaginationListProps {
  readonly children: React.ReactNode
}

export const PaginationList: React.SFC<PaginationListProps> = ({
  children,
}) => <ul className="pagination-list">{children}</ul>

export const PaginationEllipsis: React.SFC = () => (
  <li>
    <span className="pagination-ellipsis">&hellip;</span>
  </li>
)

export const Pagination: React.SFC<PaginationProps> = ({
  rounded,
  size,
  children,
}) => {
  const classes: string = classNames('pagination', {
    [`is-${size}`]: size,
    [`is-rounded`]: rounded,
  })
  return (
    <nav className={classes} role="navigation" aria-label="pagination">
      {children}
    </nav>
  )
}
