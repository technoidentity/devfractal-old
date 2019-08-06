import React from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router'

export interface SimpleRedirectProps {
  readonly from: string
  readonly to: string
  readonly exact?: boolean
}

export const SimpleRedirect: React.FC<SimpleRedirectProps> = ({
  from,
  to,
  exact,
}) => {
  return <Route exact={exact} path={from} render={() => <Redirect to={to} />} />
}

export type RouteComponentPropsRemoved<T> = Omit<T, keyof RouteComponentProps>

export function removeRouteComponentProps<T extends RouteComponentProps>(
  props: T,
): RouteComponentPropsRemoved<T> {
  const { match, location, history, staticContext, ...result } = props
  return result
}
