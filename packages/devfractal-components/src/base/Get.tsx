import React from 'react'
import { AnyTuple } from 'typelevel-ts'
import { ErrorView, Loading } from './Components'
import { useGet } from './useGet'

export interface GetProps<T extends Object, P extends AnyTuple> {
  readonly params: P
  asyncFn(...params: P): Promise<T>
  children(data: T, fetchAgain: () => void): JSX.Element
}

export function Get<T extends Object, P extends AnyTuple>({
  asyncFn,
  params,
  children,
}: GetProps<T, P>): JSX.Element {
  const { data, error, refresh } = useGet(asyncFn, params)

  if (error) {
    return <ErrorView error={error} />
  }

  if (data) {
    return children(data, refresh)
  }

  return <Loading />
}
