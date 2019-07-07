import React from 'react'
import { Async } from '../lib'

// @TODO: Use react content loader
export const Loading: React.FC = () => <h1>Loading...</h1>

interface ErrorMessageProps {
  readonly error: Error
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <h1>{`${error.message}`}</h1>
)

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
          <ErrorMessage error={error} />
        ) : (
          <Loading />
        )
      }
    </Async>
  )
}
