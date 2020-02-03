import AppBar from '@material-ui/core/AppBar'
import { AppBarProps } from '@material-ui/core/AppBar'
import { TabProps } from '@material-ui/core/Tab'
import Tab from '@material-ui/core/Tab'
import { TabsProps } from '@material-ui/core/Tabs'
import Tabs from '@material-ui/core/Tabs'
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

export type MaterialRoutedTabsProps = TabsProps & {
  readonly to?: string
  readonly urlSeparator?: string
}
export type MaterialRoutedTabsItemProps = TabProps

export const MaterialRoutedTabsItem: React.FC<MaterialRoutedTabsItemProps> = args => {
  const { value, ...props } = args
  return (
    <MaterialRoutedTabsContext.Consumer>
      {({ baseURL, separator }) => {
        return (
          <NavLink to={baseURL ? `${baseURL}${separator}${value}` : ''}>
            <Tab {...props} />
          </NavLink>
        )
      }}
    </MaterialRoutedTabsContext.Consumer>
  )
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

export const MaterialUIAppBar: React.FC<AppBarProps> = props => {
  return <AppBar {...props} />
}
