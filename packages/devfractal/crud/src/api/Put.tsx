import React from 'react'
import { useSubmitRedirect } from 'technoidentity-core'
import { SubmitAction } from './common'
import { Get } from './Get'
import { ServerError } from './ServerError'

export interface PutComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface PutProps<T, ID> {
  readonly redirectTo?: string
  readonly id: ID
  doGet(id: ID): Promise<T>
  onPut(id: ID, values: T): Promise<T>
  readonly component: React.FC<PutComponentProps<T>>
}

export function Put<T, ID>({
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
