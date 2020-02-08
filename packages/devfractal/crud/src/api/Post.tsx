import { useSubmitRedirect } from 'stp-core'
import React from 'react'
import { SubmitAction } from './common'
import { ServerError } from './ServerError'
export interface PostComponentProps<T> {
  readonly onSubmit: SubmitAction<T>
}
export interface PostProps<T> {
  readonly redirectTo?: string
  readonly component: React.FC<PostComponentProps<T>>
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
