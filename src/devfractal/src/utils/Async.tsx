import React from 'react'
import { useAsync } from 'react-use'
import { nop } from './internal'

export interface AsyncComponentProps {
  readonly isLoading: boolean
  readonly error?: Error
  readonly data?: any
}

export interface AsyncProps {
  children(props: AsyncComponentProps): JSX.Element
  asyncFn(): Promise<{ readonly [index: string]: any }>
}

export const Async: React.SFC<AsyncProps> = ({
  asyncFn,
  children,
}): JSX.Element => {
  const { value, error, loading } = useAsync(asyncFn)
  return children({ data: value, error, isLoading: loading })
}
export const delay: (delay: number, f: () => void) => Promise<void> = async (
  delay,
  f = nop,
) =>
  new Promise(resolve =>
    setTimeout(() => {
      f()
      resolve()
    }, delay),
  )

export const interval: (
  interval: number,
  f: () => void,
) => Promise<void> = async (interval, f = nop) =>
  new Promise(resolve =>
    setInterval(() => {
      f()
      resolve()
    }, interval),
  )
