import React from 'react'
import { Route as RRRoute, RouteProps } from 'react-router-dom'
import { useSafeRouter } from './RouterContext'

export function Route({
  component: Component,
  render,
  children,
  exact,
  ...props
}: RouteProps): JSX.Element {
  const { setRouteMatched } = useSafeRouter()

  return (
    <RRRoute
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
