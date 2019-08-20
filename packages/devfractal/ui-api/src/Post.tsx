import { SubmitAction, useSubmitRedirect } from 'devfractal-api'
import React from 'react'
import { ServerError } from './ServerError'

export interface PostProps<T> {
  readonly redirectTo?: string
  readonly component: React.FC<{ readonly onSubmit: SubmitAction<T> }>
  onPost(values: T): Promise<T>
}

export function Post<T>({
  redirectTo,
  onPost,
  component: Component,
}: PostProps<T>): JSX.Element {
  const { serverError, onSubmit } = useSubmitRedirect(onPost, redirectTo)

  return (
    <>
      <ServerError error={serverError} />
      <Component onSubmit={onSubmit} />
    </>
  )
}
