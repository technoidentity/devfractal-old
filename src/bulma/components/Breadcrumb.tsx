import * as React from 'react'
import classNames from 'classnames'

interface BreadcrumbProps {
  readonly alignment?: 'centered' | 'right'
  readonly children: ReadonlyArray<JSX.Element>
}

interface BreadcrumbItemProps {
  readonly href: string
  readonly active?: boolean
  readonly children: React.ReactChild
}

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = ({
  active,
  href,
  children,
}) => {
  return active ? (
    <li className="is-active" aria-current="page">
      <a href={href}>{children}</a>
    </li>
  ) : (
    <li>
      <a href={href}>{children}</a>
    </li>
  )
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  alignment,
}) => {
  const classes: string = classNames('breadcrumb', {
    [`is-${alignment}`]: alignment,
  })
  return (
    <nav className={classes} aria-label="breadcrumbs">
      <ul>
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  )
}
