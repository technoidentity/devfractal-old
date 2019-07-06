import React from 'react'
import { AnyTuple } from 'typelevel-ts'
import { ErrorView, Loading } from './Components'
import { useGet } from './useGet'

export interface GetProps<T extends Object, P extends AnyTuple> {
  readonly deps: P
  // @TODO: You should pass a global function, not a closure. Pass all deps to 'deps' instead.
  asyncFn(...params: P): Promise<T>
  children(data: T, fetchAgain: () => void): JSX.Element
}

export function Get<T extends Object, P extends AnyTuple>({
  asyncFn,
  deps,
  children,
}: GetProps<T, P>): JSX.Element {
  const { data, error, refresh } = useGet(asyncFn, ...deps)

  if (error) {
    return <ErrorView error={error} />
  }

  if (data) {
    return children(data, refresh)
  }

  return <Loading />
}
