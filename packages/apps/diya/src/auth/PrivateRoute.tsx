import React from 'react'
import { Redirect, RouteComponentProps, RouteProps } from 'react-router'
import { Route } from 'technoidentity-devfractal'
import { isAuthenticated } from '../common'

// export const PrivateRoute: React.FC<any> = (props) => {
//   return isAuthenticated() && props.children ? props.children : <SimpleRedirect from="/drivers" to="/" />
// }
interface PrivateRouteProps extends RouteProps {
  readonly component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
}

export const PrivateRoute: React.FC<PrivateRouteProps> = props => {
  const { component: Component, ...rest } = props

  return isAuthenticated() ? (
    <Route {...rest} component={Component} />
  ) : (
    <Route
      {...rest}
      render={(props: RouteProps) => {
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }}
    />
  )
}
