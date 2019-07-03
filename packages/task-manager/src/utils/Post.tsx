import React from 'react'
import { ServerError } from './Components'
import { useSubmit } from './useSubmit'

export interface PostProps<T> {
  readonly title?: string
  readonly redirectURL?: string
  readonly component: React.FC<{ onSubmit(data: T): Promise<void> }>
  onPost(data: T): Promise<T>
}

export function Post<T>({
  redirectURL,
  onPost,
  component: Component,
}: PostProps<T>): JSX.Element {
  const { serverError, onSubmit } = useSubmit(onPost, redirectURL)

  return (
    <>
      <ServerError error={serverError} />
      <Component onSubmit={onSubmit} />
    </>
  )
}
