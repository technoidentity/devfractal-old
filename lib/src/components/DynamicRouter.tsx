import React from 'react'
import { Route } from 'react-router-dom'
import { capitalizeAll, SimpleRedirect, toLower } from '..'
import { RoutedTabs, RoutedTabsItem } from './internal'

export interface DynamicRouterResult {
  readonly Routes: React.FC
  readonly Links: React.FC
}

// tslint:disable typedef
export function dynamicRouter<T extends object>(
  components: T,
  baseUrl: string,
): DynamicRouterResult {
  const keys = Object.keys(components)
  const urls = keys.map(k => toLower(k, '-'))
  const labels = keys.map(k => capitalizeAll(toLower(k, ' ')))

  const Routes: React.FC = () => (
    <>
      {urls.length > 0 && (
        <SimpleRedirect exact from={baseUrl} to={`${baseUrl}/${urls[0]}`} />
      )}

      {urls.map((url, i) => {
        const path = `${baseUrl}/${url}`
        return (
          <Route exact key={url} path={path} component={components[keys[i]]} />
        )
      })}
    </>
  )

  const Links: React.FC = () => {
    return (
      <RoutedTabs to={`${baseUrl}`} size="medium">
        {urls.map((url, i) => (
          <RoutedTabsItem key={url} value={url}>
            {labels[i]}
          </RoutedTabsItem>
        ))}
      </RoutedTabs>
    )
  }

  return { Links, Routes }
}
