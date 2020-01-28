import { Route, SimpleRedirect } from '@stp/router'
import { capitalizeAll, toLower } from '@stp/utils'
import React from 'react'
import { RoutedTabs, RoutedTabsItem } from './RoutedTabs'

export interface DynamicRouterResult {
  readonly Routes: React.FC
  readonly Links: React.FC
}

// tslint:disable typedef
export function dynamicRouter<T extends {}>(
  components: T,
  baseUrl: string,
): DynamicRouterResult {
  // tslint:disable-next-line: ban-ts-ignore
  // @ts-ignore
  const { __esModule, ...cs } = components as any
  const keys = Object.keys(cs)
  const urls = keys.map(k => toLower(k, '-'))
  const labels = keys.map(k => capitalizeAll(toLower(k, ' ')))

  const Routes: React.FC = () => (
    <>
      {urls.length > 0 && (
        <SimpleRedirect from={baseUrl} to={`${baseUrl}/${urls[0]}`} />
      )}
      {urls.map((url, i) => {
        const path = `${baseUrl}/${url}`
        return <Route exact key={url} path={path} component={cs[keys[i]]} />
      })}
    </>
  )

  const Links: React.FC = () => {
    return (
      <RoutedTabs to={baseUrl} size="medium">
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
