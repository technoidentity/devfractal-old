import React from 'react'
import { RouteComponentProps } from 'react-router'
import { NavLink } from 'react-router-dom'
import { chop, WithRouter } from '../../utils'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds'

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly value?: string
  readonly active?: boolean
  readonly href?: string
}

export const BreadcrumbItemWithRouter: React.SFC<
  BreadcrumbItemProps & RouteComponentProps
> = ({
  match,
  history,
  location,
  staticContext,

  value,
  active,
  href,
  children,
  ...props
}) => (
  <Div
    as="li"
    {...props}
    className={classNamesHelper(props, {
      'is-active': active || href === location.pathname,
    })}
  >
    {<NavLink to={href || '#'}>{children}</NavLink>}
  </Div>
)

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = props => (
  <WithRouter<BreadcrumbItemProps>
    {...props}
    component={BreadcrumbItemWithRouter}
  />
)

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly size?: BreadcrumbSize
  readonly alignment?: BreadcrumbAlignment
  readonly baseURL?: string
  readonly separator?: BreadcrumbSeparator
  readonly currentLocation?: string
}

export const BreadcrumbWithRouter: React.SFC<
  BreadcrumbProps & RouteComponentProps
> = ({
  match,
  history,
  location,
  staticContext,

  alignment,
  size,
  separator,
  baseURL,

  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'breadcrumb', {
    [`is-${alignment}`]: alignment,
    [`is-${size}`]: size,
    [`has-${separator}-separator`]: separator,
  })

  return (
    <Div as="nav" {...props} className={classes}>
      <ul>
        {React.Children.map(children, (child: any) => {
          const href: string | undefined =
            baseURL && `${baseURL && chop(baseURL)}/${child.props.value}`

          return React.cloneElement(child, href ? { href } : {})
        })}
      </ul>
    </Div>
  )
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = props => (
  <WithRouter<BreadcrumbProps> {...props} component={BreadcrumbWithRouter} />
)
