import React from 'react'
import { Route, RouteChildrenProps, RouteProps } from 'react-router'
import {
  BrowserRouter,
  BrowserRouterProps,
  HashRouter,
  HashRouterProps,
} from 'react-router-dom'

type RouterType = 'browser' | 'hash'

export type RouterProps<T extends RouterType> = (T extends 'browser'
  ? BrowserRouterProps
  : HashRouterProps) & {
  readonly variant?: T
  readonly children: React.ReactNode
}

interface RouterContext extends RouteChildrenProps {
  setRouteMatched(value: boolean): void
  getRouteMatched(): boolean
}

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

const RouterContext: React.Context<RouterContext> = React.createContext<
  RouterContext
>((undefined as unknown) as RouterContext)

export const CheckRouteMatched: React.FC = () => {
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

export function SafeRoute<
  T extends Omit<RouteProps, 'render' | 'children'> = RouteProps
>({ component, ...props }: T): JSX.Element {
  const { setRouteMatched } = useRouter()
  const Comp: any = component
  return (
    <Route
      {...props}
      render={renderProps => {
        setRouteMatched(true)
        return <Comp {...renderProps} />
      }}
    />
  )
}

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

export function useRouter(): RouterContext {
  // tslint:disable-next-line: typedef
  const result = React.useContext(RouterContext)

  return result
}
