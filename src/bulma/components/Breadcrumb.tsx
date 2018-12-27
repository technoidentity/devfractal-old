import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator =
  | 'arrow-separator'
  | 'bullet-separator'
  | 'dot-separator'
  | 'succeeds-separator'

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly href?: string
  readonly active?: boolean
}

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = ({
  active,
  href,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    [`is-active`]: active,
  })
  return (
    <Div as="li" {...props} className={classes}>
      <a href={href}>{children}</a>
    </Div>
  )
}

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly size?: BreadcrumbSize
  readonly alignment?: BreadcrumbAlignment
  readonly separator?: BreadcrumbSeparator
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  alignment,
  size,
  separator,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'breadcrumb', {
    [`is-${alignment}`]: alignment,
    [`is-${size}`]: size,
    [`has-${separator}`]: separator,
  })
  return (
    <Div as="nav" {...props} className={classes}>
      <ul>{children}</ul>
    </Div>
  )
}
