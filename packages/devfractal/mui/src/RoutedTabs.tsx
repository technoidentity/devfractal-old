import { Tab, TabProps, Tabs, TabsProps } from '@material-ui/core'
import { NavLink, useLocation } from 'stp-router'
import React from 'react'

interface RoutedTabsContext {
  readonly baseURL?: string
  readonly separator?: string
  readonly currentLocation?: string
}

const RoutedTabsContext: React.Context<RoutedTabsContext> = React.createContext<
  RoutedTabsContext
>({})

export interface RoutedTabsItemProps extends TabProps {
  readonly value: string
}

export const RoutedTabsItem: React.FC<RoutedTabsItemProps> = args => {
  const { value, ...props } = args
  return (
    <RoutedTabsContext.Consumer>
      {({ baseURL, separator }) => (
        <NavLink to={baseURL ? `${baseURL}${separator}${value}` : ''}>
          <Tab {...props} />
        </NavLink>
      )}
    </RoutedTabsContext.Consumer>
  )
}

export interface RoutedTabsProps extends TabsProps {
  readonly to?: string
  readonly urlSeparator?: string
}

export const RoutedTabs: React.FC<RoutedTabsProps> = args => {
  const { to, children, urlSeparator = '/', ...props } = args
  const { pathname } = useLocation()

  return (
    <RoutedTabsContext.Provider
      value={{
        baseURL: to,
        separator: urlSeparator,
        currentLocation: pathname,
      }}
    >
      <Tabs {...props}>{children}</Tabs>
    </RoutedTabsContext.Provider>
  )
}
