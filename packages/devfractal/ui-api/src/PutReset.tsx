import React from 'react'
import { SubmitAction } from './common'
import { Get } from './Get'
import { ServerError } from './ServerError'
import { useSubmitReset } from './useSubmit'

export interface PutResetComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface PutResetProps<T, ID extends keyof T> {
  readonly id: T[ID]
  doGet(id: T[ID]): Promise<T>
  onPut(id: T[ID], values: T): Promise<T>
  readonly component: React.FC<PutResetComponentProps<T>>
}

export function PutReset<T, ID extends keyof T>({
  id,
  doGet,
  onPut,
  component: Component,
}: PutResetProps<T, ID>): JSX.Element {
  async function update(data: T): Promise<T> {
    return onPut(id, data)
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
