import React from 'react'
import { SubmitAction } from './common'
import { ServerError } from './ServerError'
import { useSubmitReset } from './useSubmit'

export interface PostFormProps<T> {
  // readonly inlineErrors?: boolean
  readonly component: React.FC<{ readonly onSubmit: SubmitAction<T> }>
  onPost(values: T): Promise<T>
}

export function PostForm<T>({
  onPost,
  component: Component,
}: PostFormProps<T>): JSX.Element {
  const { serverError, onSubmit } = useSubmitReset(onPost)

  return (
    <>
      <ServerError error={serverError} />
      <Component onSubmit={onSubmit} />
    </>
  )
}
