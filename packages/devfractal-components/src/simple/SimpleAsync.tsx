import React from 'react'
import { Async, ErrorView, Loading } from '../lib'

export interface SimpleAsyncProps<T> {
  asyncFn(): Promise<T>
  children(props: { readonly data: T }): JSX.Element
}

export function SimpleAsync<T>({
  asyncFn,
  children,
}: SimpleAsyncProps<T>): JSX.Element {
  return (
    <Async asyncFn={asyncFn}>
      {({ data, error }) =>
        data !== undefined ? (
          children({ data })
        ) : error ? (
          <ErrorView error={error} />
        ) : (
          <Loading />
        )
      }
    </Async>
  )
}
