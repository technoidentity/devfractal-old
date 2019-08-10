import { SubmitAction, useSubmitReset } from 'devfractal-api'
import React from 'react'
import { ServerError } from './ServerError'

export interface PostResetProps<T> {
  // readonly inlineErrors?: boolean
  readonly component: React.FC<{ readonly onSubmit: SubmitAction<T> }>
  onPost(values: T): Promise<T>
}

export function PostReset<T>({
  onPost,
  component: Component,
}: PostResetProps<T>): JSX.Element {
  const { serverError, onSubmit } = useSubmitReset(onPost)

  return (
    <>
      <ServerError error={serverError} />
      <Component onSubmit={onSubmit} />
    </>
  )
}
