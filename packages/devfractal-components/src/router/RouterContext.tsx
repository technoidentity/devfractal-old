import { History, Location } from 'history'
import React from 'react'
import { RouteChildrenProps } from 'react-router'
import { verify } from 'technoidentity-utils'

interface RouterContext extends RouteChildrenProps {
  setRouteMatched(value: boolean): void
  getRouteMatched(): boolean
}

export const RouterContext: React.Context<RouterContext> = React.createContext<
  RouterContext
>((undefined as unknown) as RouterContext)

export function useRouter(): RouterContext {
  // tslint:disable-next-line: typedef
  const result = React.useContext(RouterContext)
  verify(result !== null)

  return result
}

export function useHistory(): History {
  // tslint:disable-next-line: typedef
  const { history } = useRouter()

  return history
}

export function useLocation(): Location {
  // tslint:disable-next-line: typedef
  const { location } = useRouter()

  return location
}
