import React from 'react'
import { match } from 'react-router'
import { Mixed, TypeOf } from 'technoidentity-spec'
import { cast, fatal } from 'technoidentity-utils'

// tslint:disable-next-line: typedef
export const MatchContext = React.createContext<match | undefined>(undefined)

export function useMatch<Spec extends Mixed>(
  paramsSpec: Spec,
): match<TypeOf<Spec>> {
  // tslint:disable-next-line: typedef
  const match: match | undefined = React.useContext(MatchContext)

  if (match === null || match === undefined) {
    fatal('match is null or undefined')
  } else {
    cast(paramsSpec, match.params)
  }

  return match as match<TypeOf<Spec>>
}

export function useParams<Spec extends Mixed>(paramsSpec: Spec): TypeOf<Spec> {
  const { params } = useMatch(paramsSpec)
  return params
}
