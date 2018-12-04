import * as React from 'react'
import classNames from 'classnames'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator =
  | 'arrow-separator'
  | 'bullet-separator'
  | 'dot-separator'
  | 'succeeds-separator'

interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
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
  const classes: string = classNames(
    {
      [`is-active`]: active,
    },
    className,
  )
  return (
    <li {...props} className={classes}>
      <a href={href}>{children}</a>
    </li>
  )
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
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
  const classes: string = classNames(
    'breadcrumb',
    {
      [`is-${alignment}`]: alignment,
      [`is-${size}`]: size,
      [`has-${separator}`]: separator,
    },
    className,
  )
  return (
    <nav {...props} className={classes} aria-label="breadcrumbs">
      <ul>{children}</ul>
    </nav>
  )
}
