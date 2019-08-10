import React from 'react'
import { AnyTuple } from 'typelevel-ts'
import { AsyncResult, useGet } from '../useGet'
import { ErrorView, Loading } from './Components'

// tslint:disable readonly-array
export interface GetProps<T extends {}, P extends AnyTuple> {
  readonly deps?: P | []
  // You should pass a global function, not a closure. Pass all deps to 'deps' instead.
  asyncFn(...params: P | []): Promise<T>
  children(data: T, fetchAgain: () => void): JSX.Element
}

export function Get<T extends {}, P extends AnyTuple>({
  asyncFn,
  deps = [],
  children,
}: GetProps<T, P>): JSX.Element {
  const result: AsyncResult<T> = useGet(asyncFn, ...(deps || []))

  if (result.state === 'failure') {
    return <ErrorView error={result.error} />
  }

  if (result.state === 'success') {
    // tslint:disable-next-line: no-unbound-method
    return children(result.data, result.refresh)
  }

  return <Loading />
}
