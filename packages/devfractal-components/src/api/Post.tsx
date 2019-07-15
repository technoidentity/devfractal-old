import { FormikActions } from 'formik'
import React from 'react'
import { ServerErrorView } from './Components'
import { useSubmitRedirect } from './useSubmit'

export interface PostProps<T> {
  readonly title?: string
  readonly redirectURL?: string
  readonly component: React.FC<{
    onSubmit(data: T, actions: FormikActions<T>): Promise<void>
  }>
  onPost(data: T): Promise<T>
}

export function Post<T>({
  redirectURL,
  onPost,
  component: Component,
}: PostProps<T>): JSX.Element {
  const { serverError, onSubmit } = useSubmitRedirect(onPost, redirectURL)

  return (
    <>
      <ServerErrorView error={serverError} />
      <Component onSubmit={onSubmit} />
    </>
  )
}
