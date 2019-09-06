import React from 'react'
import { SubmitAction } from './common'
import { Get } from './Get'
import { ServerError } from './ServerError'
import { useSubmitRedirect } from './useSubmit'

export interface PatchComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface PatchProps<T, ID extends keyof T> {
  readonly redirectTo?: string
  readonly id: T[ID]
  doGet(id: T[ID]): Promise<T>
  onPatch(id: T[ID], values: Partial<T>): Promise<T>
  readonly component: React.FC<PatchComponentProps<T>>
}

export function Patch<T, ID extends keyof T>({
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
