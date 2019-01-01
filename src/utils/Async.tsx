import React from 'react'
import { useAsync } from 'react-async'

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
  const { data, error, isLoading } = useAsync(asyncFn)
  return children({ data, error, isLoading })
}

export const delay: (delay: number, f: () => void) => Promise<void> = async (
  delay: number,
  f: () => void,
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
) => Promise<void> = async (interval: number, f: () => void) =>
  new Promise(resolve =>
    setInterval(() => {
      f()
      resolve()
    }, interval),
  )
