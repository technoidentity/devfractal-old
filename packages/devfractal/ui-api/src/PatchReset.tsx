import React from 'react'
import { SubmitAction } from './common'
import { Get } from './Get'
import { ServerError } from './ServerError'
import { useSubmitReset } from './useSubmit'

export interface PatchResetComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface PatchResetProps<T, ID extends keyof T> {
  readonly id: T[ID]
  doGet(id: T[ID]): Promise<T>
  onPatch(id: T[ID], values: Partial<T>): Promise<T>
  readonly component: React.FC<PatchResetComponentProps<T>>
}

export function PatchReset<T, ID extends keyof T>({
  id,
  doGet,
  onPatch,
  component: Component,
}: PatchResetProps<T, ID>): JSX.Element {
  async function update(data: T): Promise<T> {
    return onPatch(id, data)
  }

  const { serverError, onSubmit } = useSubmitReset(update)

  return (
    <>
      <ServerError error={serverError} />
      <Get asyncFn={doGet} deps={[id]}>
        {(data: T) => <Component initial={data} onSubmit={onSubmit} />}
      </Get>
    </>
  )
}
