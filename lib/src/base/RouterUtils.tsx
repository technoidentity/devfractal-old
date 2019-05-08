import React from 'react'
import { Redirect, Route, RouteComponentProps, withRouter } from 'react-router'
import { Omit } from 'utils'

export type RouteComponentPropsRemoved<T> = Omit<T, keyof RouteComponentProps>

export const removeRouteComponentProps: <T extends RouteComponentProps>(
  props: T,
) => RouteComponentPropsRemoved<T> = ({
  match,
  location,
  history,
  staticContext,
  ...result
}) => result

export type WithRouterProps<T> = T & {
  readonly children?: React.ReactNode
  readonly component?: React.ComponentType<T & RouteComponentProps>
}

export function WithRouter<T = {}>(props: WithRouterProps<T>): JSX.Element {
  const { children, component, ...rest } = props
  const Component: any = withRouter(component as any)
  return <Component {...rest}>{children}</Component>
}

export interface SimpleRedirectProps {
  readonly from: string
  readonly to: string
  readonly exact?: boolean
}

export const SimpleRedirect: React.FC<SimpleRedirectProps> = ({
  from,
  to,
  exact,
}) => <Route exact={exact} path={from} render={() => <Redirect to={to} />} />