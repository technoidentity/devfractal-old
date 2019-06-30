import React from 'react'

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

export const ErrorView: React.FC<{ readonly error: Error }> = ({ error }) => (
  <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
)

export const Loading: React.FC = () => (
  <h1 className="is-text is-size-1 is-info">Loading....</h1>
)

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
