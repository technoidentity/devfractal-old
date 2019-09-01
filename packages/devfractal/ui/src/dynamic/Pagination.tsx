import { classNamesHelper, El, Helpers } from 'devfractal-ui-core'
import React from 'react'

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  /**
   * To have rounded pagination items
   */
  readonly rounded?: boolean
  /**
   * To Resize the Pagination elements
   */
  readonly size?: 'small' | 'medium' | 'large'
  /**
   * To change the order of the elements in PaginationList
   */
  readonly alignment?: 'centered' | 'right'
}

export const Pagination: React.FC<PaginationProps> = ({
  rounded,
  size,
  alignment,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination', {
    [`is-${alignment}`]: alignment,
    [`is-${size}`]: size,
    'is-rounded': rounded,
  })
  return (
    <El
      as="nav"
      {...props}
      className={classes}
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </El>
  )
}

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  /**
   * To Specify that the page is the current one
   */
  readonly current?: boolean
  /**
   * You can disable some links if they are not active, or change the amount of page numbers available.
   */
  readonly disabled?: boolean
}

export const PaginationLink: React.FC<PaginationLinkProps> = ({
  current,
  disabled,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-link', {
    'is-current': current,
  })
  return (
    <li>
      <El as="a" {...props} disabled={disabled} className={classes}>
        {children}
      </El>
    </li>
  )
}

export interface PaginationListProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const PaginationList: React.FC<PaginationListProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-list')
  return (
    <El as="ul" {...props} className={classes}>
      {children}
    </El>
  )
}
export interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Helpers {}

export const PaginationEllipsis: React.FC<PaginationEllipsisProps> = ({
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
export interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  /**
   * To disable some links if they are not active
   */
  readonly disabled?: boolean
}

export const PaginationPrevious: React.FC<PaginationPreviousProps> = ({
  disabled,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(
    props,

    'pagination-previous',
  )
  return (
    <El as="a" {...props} disabled={disabled} className={classes}>
      {children}
    </El>
  )
}

export interface PaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  /**
   * To disable some links if they are not active
   */
  readonly disabled?: boolean
}

export const PaginationNext: React.FC<PaginationNextProps> = ({
  children,
  disabled,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-next')
  return (
    <El as="a" {...props} disabled={disabled} className={classes}>
      {children}
    </El>
  )
}
