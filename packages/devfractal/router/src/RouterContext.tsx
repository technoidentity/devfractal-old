import { History, Location } from 'history'
import { parse } from 'query-string'
import React from 'react'
import { RouteChildrenProps } from 'react-router'
import { Mixed, TypeOf } from 'technoidentity-spec'
import { cast, verify } from 'technoidentity-utils'
// tslint:disable typedef

interface RouterContext extends RouteChildrenProps {
  setRouteMatched(value: boolean): void
  getRouteMatched(): boolean
}

export const RouterContext: React.Context<RouterContext> = React.createContext<
  RouterContext
>((undefined as unknown) as RouterContext)

export function useRouter(): RouterContext {
  const result = React.useContext(RouterContext)
  verify(result !== null)

  return result
}

export function useHistory(): History {
  const { history } = useRouter()

  return history
}

export function useLocation(): Location {
  const { location } = useRouter()

  return location
}

export function useQuery<Spec extends Mixed>(
  querySpec: Spec,
): TypeOf<typeof querySpec> {
  const location = useLocation()
  const query = parse(location.search)
  cast(querySpec, query)

  return query
}
