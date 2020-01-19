import React from 'react'
import {
  BrowserRouter,
  BrowserRouterProps,
  HashRouter,
  HashRouterProps,
  Route,
} from 'react-router-dom'
import { SafeRouterContext, useSafeRouter } from './RouterContext'

// tslint:disable no-class readonly-keyword no-object-mutation no-this
class RouteMatched {
  private routeMatched: boolean = false

  setRouteMatched = (routeMatched: boolean) => {
    this.routeMatched = routeMatched
  }

  getRouteMatched = () => this.routeMatched
}
// tslint:enable no-class readonly-keyword no-object-mutation no-this

export type RouterType = 'browser' | 'hash'

export type RouterProps<T extends RouterType> = (T extends 'browser'
  ? BrowserRouterProps
  : HashRouterProps) & {
  readonly variant?: T
  readonly children: React.ReactNode
}

const CheckRouteMatched: React.FC = () => {
  const { getRouteMatched } = useSafeRouter()
  if (!getRouteMatched()) {
    throw new Error('no route matched')
  }
  // tslint:disable-next-line: no-null-keyword
  return null
}

const RouterChildren: React.FC = ({ children }) => (
  <Route>
    {routeProps => (
      <SafeRouterContext.Provider
        value={{ ...routeProps, ...new RouteMatched() }}
      >
        {children}
        <CheckRouteMatched />
      </SafeRouterContext.Provider>
    )}
  </Route>
)

export function Router<T extends RouterType>({
  variant,
  children,
  ...props
}: RouterProps<T>): JSX.Element {
  return variant === 'browser' ? (
    <BrowserRouter {...props}>
      <RouterChildren>{children}</RouterChildren>
    </BrowserRouter>
  ) : (
    <HashRouter {...props}>
      <RouterChildren>{children}</RouterChildren>
    </HashRouter>
  )
}
