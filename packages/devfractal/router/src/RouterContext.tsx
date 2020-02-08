import { verify } from 'stp-utils'
import React from 'react'
import { RouteChildrenProps } from 'react-router'

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
