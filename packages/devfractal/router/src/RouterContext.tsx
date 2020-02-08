import React from 'react'
import { RouteChildrenProps } from 'react-router'
import { verify } from 'technoidentity-utils'

// tslint:disable typedef

interface SafeRouterContext extends RouteChildrenProps {
  setRouteMatched(value: boolean): void
  getRouteMatched(): boolean
}

export const SafeRouterContext: React.Context<SafeRouterContext> = React.createContext<
  SafeRouterContext
>((undefined as unknown) as SafeRouterContext)

export function useSafeRouter(): SafeRouterContext {
  const result = React.useContext(SafeRouterContext)
  verify(result !== null)

  return result
}
