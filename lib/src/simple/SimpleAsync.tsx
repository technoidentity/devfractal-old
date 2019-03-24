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

export interface SimpleAsyncProps<T = any> {
  asyncFn(): Promise<T>
  children(props: { readonly data: T }): JSX.Element
}

export const SimpleAsync: React.FC<SimpleAsyncProps> = ({
  asyncFn,
  children,
}) => (
  <Async asyncFn={asyncFn}>
    {({ data, error, isLoading }) =>
      isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        children(data)
      )
    }
  </Async>
)
