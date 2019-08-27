import { AsyncResult, useGet } from 'devfractal-api'
import React from 'react'
import { ErrorView, Loading } from './Components'

// tslint:disable readonly-array no-unbound-method
export interface GetProps<T extends {}, P extends any[]> {
  readonly deps?: P | []
  readonly component?: React.FC<{ readonly data: T; fetchAgain?(): void }>
  // You should pass a global function, not a closure. Pass all deps to 'deps' instead.
  asyncFn(...params: P): Promise<T>
  children(data: T, fetchAgain: () => void): JSX.Element
}

export function Get<T extends {}, P extends any[]>({
  asyncFn,
  deps = [],
  component: Component,
  children,
}: GetProps<T, P>): JSX.Element {
  const result: AsyncResult<T> = useGet(asyncFn, ...(deps as P))

  if (result.state === 'failure') {
    return <ErrorView error={result.error} />
  }

  if (result.state === 'success') {
    return Component ? (
      <Component data={result.data} fetchAgain={result.refresh} />
    ) : (
      children(result.data, result.refresh)
    )
  }

  return <Loading />
}
