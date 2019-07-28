import React from 'react'
import { RouteComponentProps } from 'react-router'
import { NavLink } from 'react-router-dom'
import {
  removeRouteComponentProps,
  WithRouter,
} from 'technoidentity-devfractal-router'
import {
  classNamesHelper,
  El,
  Helpers,
} from 'technoidentity-devfractal-ui-core'
import { chop } from 'technoidentity-utils'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds'

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  // Used by parent to create href
  readonly value?: string
  // User could directly pass active, if not, this item will be active if href == current url
  readonly active?: boolean
  // Pass either 'value' or 'href', 'href' can be constructed from 'value'
  readonly href?: string
}

export const BreadcrumbItemWithRouter: React.FC<
  BreadcrumbItemProps & RouteComponentProps
> = args => {
  const { active, href, children, ...props } = removeRouteComponentProps(args)

  return (
    <El
      as="li"
      {...props}
      className={classNamesHelper(props, {
        'is-active':
          active || (href && chop(href)) === chop(args.location.pathname),
      })}
    >
      {<NavLink to={href || '#'}>{children}</NavLink>}
    </El>
  )
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = props => (
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
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
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
    <El as="nav" {...props} className={classes}>
      <ul>
        {React.Children.map(children, (child: any) =>
          React.cloneElement(
            child,
            baseURL ? { href: `${chop(baseURL)}/${child.props.value}` } : {},
          ),
        )}
      </ul>
    </El>
  )
}
