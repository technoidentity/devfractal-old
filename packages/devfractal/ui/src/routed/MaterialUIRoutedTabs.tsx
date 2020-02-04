import { Tab, TabProps, Tabs, TabsProps } from '@material-ui/core'
import { NavLink, useLocation } from '@stp/router'
import React from 'react'

interface MaterialRoutedTabsContext {
  readonly baseURL?: string
  readonly separator?: string
  readonly currentLocation?: string
}

const MaterialRoutedTabsContext: React.Context<MaterialRoutedTabsContext> = React.createContext<
  MaterialRoutedTabsContext
>({})

export interface MaterialRoutedTabsItemProps extends TabProps {
  readonly value: string
}

export const MaterialRoutedTabsItem: React.FC<MaterialRoutedTabsItemProps> = args => {
  const { value, ...props } = args
  return (
    <MaterialRoutedTabsContext.Consumer>
      {({ baseURL, separator }) => (
        <NavLink to={baseURL ? `${baseURL}${separator}${value}` : ''}>
          <Tab {...props} />
        </NavLink>
      )}
    </MaterialRoutedTabsContext.Consumer>
  )
}

export interface MaterialRoutedTabsProps extends TabsProps {
  readonly to?: string
  readonly urlSeparator?: string
}

export const MaterialRoutedTabs: React.FC<MaterialRoutedTabsProps> = args => {
  const { to, children, urlSeparator = '/', ...props } = args
  const { pathname } = useLocation()

  return (
    <MaterialRoutedTabsContext.Provider
      value={{
        baseURL: to,
        separator: urlSeparator,
        currentLocation: pathname,
      }}
    >
      <Tabs {...props}>{children}</Tabs>
    </MaterialRoutedTabsContext.Provider>
  )
}
