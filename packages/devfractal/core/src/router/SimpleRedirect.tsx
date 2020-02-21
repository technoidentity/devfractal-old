import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { useSafeRouter } from './RouterContext'
import { SafeRoute } from './SafeRoute'

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
  const { setRouteMatched } = useSafeRouter()
  return (
    <SafeRoute
      exact={exact !== undefined ? exact : true}
      path={from}
      render={() => {
        if (setRouteMatched) {
          setRouteMatched(true)
        }
        return <Redirect to={to} />
      }}
    />
  )
}

export type RouteComponentPropsRemoved<T> = Omit<T, keyof RouteComponentProps>

export function removeRouteComponentProps<T extends RouteComponentProps>(
  props: T,
): RouteComponentPropsRemoved<T> {
  const { match, location, history, staticContext, ...result } = props
  return result
}
