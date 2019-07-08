import { History, Location } from 'history'
import React from 'react'
import {
  match,
  Redirect,
  Route,
  RouteChildrenProps,
  RouteComponentProps,
  RouteProps,
  withRouter,
} from 'react-router'
import {
  BrowserRouter,
  BrowserRouterProps,
  HashRouter,
  HashRouterProps,
} from 'react-router-dom'
import { fatal, invariant } from 'technoidentity-utils'

export type WithRouterProps<T> = T & {
  readonly children?: React.ReactNode
  readonly component?: React.ComponentType<T & RouteComponentProps>
}

export function WithRouter<T>(props: WithRouterProps<T>): JSX.Element {
  const { children, component, ...rest } = props
  const Component: any = withRouter(component as any)
  return <Component {...rest}>{children}</Component>
}

export interface SimpleRedirectProps {
  readonly from: string
  readonly to: string
  readonly exact?: boolean
}

export const SimpleRedirect: React.FC<SimpleRedirectProps> = ({
  from,
  to,
  exact,
}) => (
  <SafeRoute exact={exact} path={from} render={() => <Redirect to={to} />} />
)

export type RouteComponentPropsRemoved<T> = Omit<T, keyof RouteComponentProps>

export function removeRouteComponentProps<T extends RouteComponentProps>(
  props: T,
): RouteComponentPropsRemoved<T> {
  const { match, location, history, staticContext, ...result } = props
  return result
}

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

// tslint:disable-next-line: typedef
const MatchContext = React.createContext<match | undefined>(undefined)

export function SafeRoute<
  T extends Omit<RouteProps, 'render' | 'children'> = RouteProps
>({ component, exact, ...props }: T): JSX.Element {
  const { setRouteMatched } = useRouter()
  const Comp: any = component
  return (
    <Route
      exact={exact || true}
      {...props}
      render={({ match, ...renderProps }) => {
        if (setRouteMatched) {
          setRouteMatched(true)
        }
        return (
          <MatchContext.Provider value={match}>
            <Comp {...renderProps} />
          </MatchContext.Provider>
        )
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
  invariant(result !== null)

  return result
}

export function useHistory(): History {
  // tslint:disable-next-line: typedef
  const { history } = useRouter()

  return history
}

export function useMatch<T>(): match<T> {
  // tslint:disable-next-line: typedef
  const match = React.useContext(MatchContext)

  if (match === null || match === undefined) {
    fatal('match is null or undefined')
  }

  return match as match<T>
}

export function useLocation(): Location {
  // tslint:disable-next-line: typedef
  const { location } = useRouter()

  return location
}
