import React from 'react'
import { SubmitAction } from './common'
import { Get } from './Get'
import { ServerError } from './ServerError'
import { useSubmitRedirect } from './useSubmit'

export interface PutComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface PutProps<T, ID extends keyof T> {
  readonly redirectTo?: string
  readonly id: T[ID]
  doGet(id: T[ID]): Promise<T>
  onPut(id: T[ID], values: T): Promise<T>
  readonly component: React.FC<PutComponentProps<T>>
}

export function Put<T, ID extends keyof T>({
  id,
  redirectTo,
  doGet,
  onPut,
  component: Component,
}: PutProps<T, ID>): JSX.Element {
  async function update(data: T): Promise<T> {
    return onPut(id, data)
  }

  const { serverError, onSubmit } = useSubmitRedirect(update, redirectTo)

  return (
    <>
      <ServerError error={serverError} />
      <Get asyncFn={doGet} deps={[id]}>
        {(data: T) => <Component initial={data} onSubmit={onSubmit} />}
      </Get>
    </>
  )
}
