import React from 'react'
import { Route as RRRoute, RouteProps } from 'react-router-dom'
import { MatchContext } from './MatchContext'
import { useRouter } from './RouterContext'

export function Route({
  component: Component,
  render,
  children,
  exact,
  ...props
}: RouteProps): JSX.Element {
  const { setRouteMatched } = useRouter()

  return (
    <RRRoute
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
