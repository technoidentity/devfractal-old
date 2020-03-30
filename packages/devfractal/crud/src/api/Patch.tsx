import React from 'react'
import { useSubmitRedirect } from 'srtp-core'
import { SubmitAction } from './common'
import { Get } from './Get'
import { ServerError } from './ServerError'

export interface PatchComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface PatchProps<T, ID> {
  readonly redirectTo?: string
  readonly id: ID
  doGet(id: ID): Promise<T>
  onPatch(id: ID, values: Partial<T>): Promise<T>
  readonly component: React.FC<PatchComponentProps<T>>
}

export function Patch<T, ID>({
  id,
  redirectTo,
  doGet,
  onPatch,
  component: Component,
}: PatchProps<T, ID>): JSX.Element {
  async function update(data: T): Promise<T> {
    return onPatch(id, data)
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
