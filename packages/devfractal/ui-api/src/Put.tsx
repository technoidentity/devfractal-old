import { SubmitAction } from 'devfractal-api'
import { useSubmitRedirect } from 'devfractal-api'
import React from 'react'
import { Get } from './Get'
import { ServerError } from './ServerError'

export interface PutComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface PutProps<T, ID extends keyof T> {
  readonly redirectPath?: string
  readonly id: T[ID]
  doGet(id: T[ID]): Promise<T>
  onPut(id: T[ID], values: T): Promise<T>
  readonly component: React.FC<PutComponentProps<T>>
}

export function Put<T, ID extends keyof T>({
  id,
  redirectPath,
  doGet,
  onPut,
  component: Component,
}: PutProps<T, ID>): JSX.Element {
  async function update(data: T): Promise<T> {
    return onPut(id, data)
  }

  const { serverError, onSubmit } = useSubmitRedirect(update, redirectPath)

  return (
    <>
      <ServerError error={serverError} />
      <Get asyncFn={doGet} deps={[id]}>
        {(data: T) => <Component initial={data} onSubmit={onSubmit} />}
      </Get>
    </>
  )
}
