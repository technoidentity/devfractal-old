import { useSubmitReset } from '@stp/core'
import React from 'react'
import { SubmitAction } from './common'
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
