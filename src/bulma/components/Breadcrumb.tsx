import * as React from 'react'
import classNames from 'classnames'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator =
  | 'arrow-separator'
  | 'bullet-separator'
  | 'dot-separator'
  | 'succeeds-separator'

interface BreadcrumbProps {
  readonly size?: BreadcrumbSize
  readonly alignment?: BreadcrumbAlignment
  readonly separator?: BreadcrumbSeparator
}

interface BreadcrumbItemProps {
  readonly href: string
  readonly active?: boolean
}

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = ({
  href,
  active,
  children,
}) => {
  const classes: string = classNames({
    'is-active': active,
  })
  return (
    <li className={classes} aria-current="page">
      <a href={href}>{children}</a>
    </li>
  )
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  alignment,
  size,
  separator,
}) => {
  const classes: string = classNames('breadcrumb', {
    [`is-${alignment}`]: alignment,
    [`is-${size}`]: size,
    [`has-${separator}`]: separator,
  })
  return (
    <nav className={classes} aria-label="breadcrumbs">
      <ul>{children}</ul>
    </nav>
  )
}
