import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useSafeRouter } from './RouterContext'

export function SafeRoute({
  component: Component,
  render,
  children,
  exact,
  ...props
}: RouteProps): JSX.Element {
  const { setRouteMatched } = useSafeRouter()

  return (
    <Route
      {...props}
      exact={exact !== undefined ? exact : true}
      render={renderProps => {
        if (setRouteMatched) {
          setRouteMatched(true)
        }

        return Component ? (
          <Component {...renderProps} />
        ) : render ? (
          render(renderProps)
        ) : (
          children
        )
      }}
    />
  )
}
