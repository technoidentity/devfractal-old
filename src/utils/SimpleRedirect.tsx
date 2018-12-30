import React from 'react'
import { Redirect, Route } from 'react-router'

export interface SimpleRedirectProps {
  readonly from: string
  readonly to: string
  readonly exact?: boolean
}
export const SimpleRedirect: React.SFC<SimpleRedirectProps> = ({
  from,
  to,
  exact,
}) => <Route exact={exact} path={from} render={() => <Redirect to={to} />} />
