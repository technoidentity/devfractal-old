import React from 'react'
import { AnyTuple } from 'typelevel-ts'
import { ErrorView } from './ErrorView'
import { Loading } from './Loading'
import { useGET } from './useGET'

export interface AsyncProps<P extends AnyTuple, T extends Object> {
  readonly param: P
  asyncFn(...param: P): Promise<T>
  children(data: T, fetchAgain: () => void): JSX.Element
}

export function Async<P extends AnyTuple, T extends Object>({
  asyncFn,
  param,
  children,
}: AsyncProps<P, T>): JSX.Element {
  const [data, error, fetch] = useGET(asyncFn, param)

  if (error) {
    return <ErrorView error={error} />
  }

  if (data) {
    return children(data, fetch)
  }

  return <Loading />
}
