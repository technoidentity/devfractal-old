import React from 'react'
import {
  BrowserRouter,
  BrowserRouterProps,
  HashRouter,
  HashRouterProps,
  Route,
} from 'react-router-dom'
import { RouterContext, useRouter } from './RouterContext'

// tslint:disable-next-line: no-class
class RouteMatched {
  // tslint:disable-next-line: readonly-keyword
  private routeMatched: boolean = false
  // tslint:disable-next-line: readonly-keyword
  setRouteMatched = (routeMatched: boolean) => {
    // tslint:disable-next-line: no-object-mutation no-this
    this.routeMatched = routeMatched
  }
  // tslint:disable-next-line: readonly-keyword no-this
  getRouteMatched = () => this.routeMatched
}

export type RouterType = 'browser' | 'hash'

export type RouterProps<T extends RouterType> = (T extends 'browser'
  ? BrowserRouterProps
  : HashRouterProps) & {
  readonly variant?: T
  readonly children: React.ReactNode
}

const CheckRouteMatched: React.FC = () => {
  const { getRouteMatched } = useRouter()
  if (!getRouteMatched()) {
    throw new Error('no route matched')
  }
  // tslint:disable-next-line: no-null-keyword
  return null
}

const RouterChildren: React.FC = ({ children }) => (
  <Route>
    {routeProps => (
      <RouterContext.Provider value={{ ...routeProps, ...new RouteMatched() }}>
        {children}
        <CheckRouteMatched />
      </RouterContext.Provider>
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
