import React from 'react'
import { AnyTuple } from 'typelevel-ts'
import { ErrorView } from './ErrorView'
import { Loading } from './Loading'
import { useAsync } from './useAsync'

export interface AsyncProps<T extends Object, P extends AnyTuple> {
  readonly param: P
  asyncFn(...param: P): Promise<T>
  children(data: T, fetchAgain: () => void): JSX.Element
}

export function Async<T extends Object, P extends AnyTuple>({
  asyncFn,
  param,
  children,
}: AsyncProps<T, P>): JSX.Element {
  const { data, error, fetch } = useAsync(asyncFn, param)

  if (error) {
    return <ErrorView error={error} />
  }

  if (data) {
    return children(data, fetch)
  }

  return <Loading />
}
