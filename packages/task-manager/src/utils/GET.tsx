import React from 'react'
import { ErrorView } from './ErrorView'
import { Loading } from './Loading'
import { useGET } from './useGET'

export interface GETComponentProps<T extends Object> {
  readonly data?: T
}

export interface GETProps<P, T extends Object> {
  readonly param: P
  asyncFn(param: P): Promise<T>
  children(data: T): JSX.Element
}

export function GET<P, T extends Object>({
  asyncFn,
  param,
  children,
}: GETProps<P, T>): JSX.Element {
  const [data, error] = useGET(asyncFn, param)

  if (error) {
    return <ErrorView error={error} />
  }

  if (data) {
    return children(data)
  }

  return <Loading />
}
