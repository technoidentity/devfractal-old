import { FormikActions } from 'formik'
import React from 'react'
import { ServerErrorView } from './Components'
import { Get } from './Get'
import { useSubmitRedirect } from './useSubmit'

export interface PutComponentProps<T> {
  readonly initial?: T
  onSubmit(values: T, actions: FormikActions<T>): Promise<void>
}

export interface PutProps<T> {
  readonly redirectPath?: string
  readonly id: string
  doGet(id: string): Promise<T>
  onPut(id: string, values: T): Promise<T>
  readonly component: React.FC<PutComponentProps<T>>
}

export function Put<T>({
  id,
  redirectPath,
  doGet,
  onPut,
  component: Component,
}: PutProps<T>): JSX.Element {
  async function update(data: T): Promise<T> {
    return onPut(id, data)
  }

  const { serverError, onSubmit } = useSubmitRedirect(update, redirectPath)

  return (
    <>
      <ServerErrorView error={serverError} />
      <Get asyncFn={doGet} deps={[id]}>
        {(data: T) => <Component initial={data} onSubmit={onSubmit} />}
      </Get>
    </>
  )
}
