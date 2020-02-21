import React from 'react'
import { useLocation } from 'react-router'

import { chop, extractSegment } from 'technoidentity-utils'
import { classNamesHelper, El, Helpers } from '../core'
import { NavLink } from 'react-router-dom'

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

export const RoutedTabs: React.FC<RoutedTabsProps> = args => {
  const {
    to,
    urlSeparator = '/',
    size,
    alignment,
    fullWidth,
    tabsStyle,
    children,
    ...props
  } = args

  const classes: string = classNamesHelper(props, 'tabs', {
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    [`is-${tabsStyle}`]: tabsStyle,
    'is-fullwidth': fullWidth,
  })
  const { pathname } = useLocation()

  return (
    <RoutedTabsContext.Provider
      value={{
        baseURL: to,
        separator: urlSeparator,
        currentLocation: pathname,
      }}
    >
      <El {...props} className={classes}>
        <ul>{children}</ul>
      </El>
    </RoutedTabsContext.Provider>
  )
}
