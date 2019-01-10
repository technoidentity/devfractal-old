import React from 'react'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import { WithRouter } from '../../utils'
import { classNamesHelper, Div, Helpers } from '../modifiers'

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

  return (
    currentLocation.startsWith(baseURL) &&
    tab ===
      currentLocation.slice(
        baseURL.length + separator.length,
        baseURL.length + separator.length + tab.length,
      )
  )
}

export const RoutedTabsItem: React.SFC<RoutedTabsItemProps> = ({
  value,
  children,
  ...props
}) => (
  <RoutedTabsContext.Consumer>
    {({ baseURL, separator, currentLocation }) => (
      <Div
        as="li"
        {...props}
        className={classNamesHelper(props, {
          'is-active': matches(value, separator, baseURL, currentLocation),
        })}
      >
        <NavLink to={baseURL ? `${baseURL}${separator}${value}` : ''}>
          {children}
        </NavLink>
      </Div>
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

// tslint:disable-next-line: typedef
const RoutedTabsWithRouter: React.SFC<
  RoutedTabsProps & RouteComponentProps
> = ({
  match,
  history,
  location,
  staticContext,
  to,
  urlSeparator = '/',
  size,
  alignment,
  fullWidth,
  tabsStyle,
  children,
  ...props
}) => {
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
        currentLocation: location.pathname,
      }}
    >
      <Div {...props} className={classes}>
        <ul>{children}</ul>
      </Div>
    </RoutedTabsContext.Provider>
  )
}

export const RoutedTabs: React.SFC<RoutedTabsProps> = props => (
  <WithRouter<RoutedTabsProps> {...props} component={RoutedTabsWithRouter} />
)
