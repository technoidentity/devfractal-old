import React from 'react'
import { ErrorView } from './ErrorView'
import { Loading } from './Loading'

export type GETViewComponentProps<T extends Object> = React.FC<{
  readonly data?: T
  onSubmit(values: T): Promise<void>
}>

export interface GETViewProps<T extends Object> {
  readonly error?: Error
  readonly data?: T
  readonly component: GETViewComponentProps<T>
  onSubmit(values: T): Promise<void>
}

export function GETView<T extends Object>({
  error,
  data,
  onSubmit,
  component: Component,
}: GETViewProps<T>): JSX.Element {
  if (error) {
    return <ErrorView error={error} />
  }

  if (data) {
    return <Component data={data} onSubmit={onSubmit} />
  }

  return <Loading />
}
