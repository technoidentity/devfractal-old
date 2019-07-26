import React from 'react'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import {
  removeRouteComponentProps,
  WithRouter,
} from 'technoidentity-devfractal-router'
import { chop, extractSegment } from 'technoidentity-utils'
import { classNamesHelper, El, Helpers } from '../lib'

interface RoutedTabsContext {
  readonly baseURL?: string
  readonly separator?: string
  readonly currentLocation?: string
}

const RoutedTabsContext: React.Context<RoutedTabsContext> = React.createContext<
  RoutedTabsContext
>({})

type RoutedTabsSize = 'small' | 'medium' | 'large'

type RoutedTabsAlignment = 'centered' | 'right'

type RoutedTabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'

export interface RoutedTabsItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly value: string
}

function matches(
  tab: string,
  separator?: string,
  baseURL?: string,
  currentLocation?: string,
): boolean {
  if (!(baseURL && currentLocation && separator)) {
    return false
  }
  const base: string = chop(baseURL, separator)
  const current: string = chop(currentLocation, separator)

  return (
    current.indexOf(base) >= 0 &&
    tab === extractSegment(current, base.length + separator.length, separator)
  )
}

export const RoutedTabsItem: React.FC<RoutedTabsItemProps> = ({
  value,
  children,
  ...props
}) => (
  <RoutedTabsContext.Consumer>
    {({ baseURL, separator, currentLocation }) => (
      <El
        as="li"
        {...props}
        className={classNamesHelper(props, {
          'is-active': matches(value, separator, baseURL, currentLocation),
        })}
      >
        <NavLink to={baseURL ? `${baseURL}${separator}${value}` : ''}>
          {children}
        </NavLink>
      </El>
    )}
  </RoutedTabsContext.Consumer>
)

export interface RoutedTabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly size?: RoutedTabsSize
  readonly alignment?: RoutedTabsAlignment
  readonly fullWidth?: boolean
  readonly tabsStyle?: RoutedTabsStyle
  readonly to?: string
  readonly urlSeparator?: string
}

const RoutedTabsWithRouter: React.FC<
  RoutedTabsProps & RouteComponentProps
> = args => {
  const {
    to,
    urlSeparator = '/',
    size,
    alignment,
    fullWidth,
    tabsStyle,
    children,
    ...props
  } = removeRouteComponentProps(args)

  const classes: string = classNamesHelper(props, 'tabs', {
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    [`is-${tabsStyle}`]: tabsStyle,
    'is-fullwidth': fullWidth,
  })

  return (
    <RoutedTabsContext.Provider
      value={{
        baseURL: to,
        separator: urlSeparator,
        currentLocation: args.location.pathname,
      }}
    >
      <El {...props} className={classes}>
        <ul>{children}</ul>
      </El>
    </RoutedTabsContext.Provider>
  )
}

export const RoutedTabs: React.FC<RoutedTabsProps> = props => (
  <WithRouter<RoutedTabsProps> {...props} component={RoutedTabsWithRouter} />
)
