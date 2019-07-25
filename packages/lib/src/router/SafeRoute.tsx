import React from 'react'
import { Route, RouteProps } from 'react-router'
import { MatchContext } from './MatchContext'
import { useRouter } from './RouterContext'

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
