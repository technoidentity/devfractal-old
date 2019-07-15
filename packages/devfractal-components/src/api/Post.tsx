import { FormikActions } from 'formik'
import React from 'react'
import { ServerErrorView } from './Components'
import { useSubmitRedirect } from './useSubmit'

export interface PostProps<T> {
  readonly title?: string
  readonly redirectPath?: string
  readonly component: React.FC<{
    onSubmit(data: T, actions: FormikActions<T>): Promise<void>
  }>
  onPost(data: T): Promise<T>
}

export function Post<T>({
  redirectPath,
  onPost,
  component: Component,
}: PostProps<T>): JSX.Element {
  const { serverError, onSubmit } = useSubmitRedirect(onPost, redirectPath)

  return (
    <>
      <ServerErrorView error={serverError} />
      <Component onSubmit={onSubmit} />
    </>
  )
}
