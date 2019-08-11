import React from 'react'
import { Route, RouteProps } from 'react-router'
import { MatchContext } from './MatchContext'
import { useRouter } from './RouterContext'

export function SafeRoute({
  component: Component,
  render,
  children,
  exact,
  ...props
}: RouteProps): JSX.Element {
  const { setRouteMatched } = useRouter()

  return (
    <Route
      {...props}
      exact={exact !== undefined ? exact : true}
      render={renderProps => {
        if (setRouteMatched) {
          setRouteMatched(true)
        }

        return (
          <MatchContext.Provider value={renderProps.match}>
            {Component ? (
              <Component {...renderProps} />
            ) : render ? (
              render(renderProps)
            ) : (
              children
            )}
          </MatchContext.Provider>
        )
      }}
    />
  )
}
