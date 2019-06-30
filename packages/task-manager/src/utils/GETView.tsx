import React from 'react'

export interface GETViewProps<T extends Object> {
  readonly loading: boolean
  readonly error: Error
  readonly data: T
  readonly component: React.FC<{ readonly data: T }>
}

export function GETView<T extends Object>({
  error,
  data,
  component: Component,
}: GETViewProps<T>): JSX.Element {
  if (error) {
    return <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
  }

  if (data) {
    return <Component data={data} />
  }

  return <h1 className="is-text is-size-1 is-info">Loading....</h1>
}
