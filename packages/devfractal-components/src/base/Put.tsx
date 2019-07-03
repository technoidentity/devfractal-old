import React from 'react'
import { ServerErrorView } from './Components'
import { Get } from './Get'
import { useSubmit } from './useSubmit'

export interface PutComponentProps<T extends Object> {
  readonly initial?: T
  onSubmit(values: T): Promise<void>
}

export interface PutProps<T extends Object> {
  readonly redirectURL?: string
  readonly id: string
  doGet(id: string): Promise<T>
  onPut(id: string, values: T): Promise<T>
  readonly component: React.FC<PutComponentProps<T>>
}

export function Put<T>({
  id,
  redirectURL,
  doGet,
  onPut,
  component: Component,
}: PutProps<T>): JSX.Element {
  async function update(data: T): Promise<T> {
    return onPut(id, data)
  }

  const { serverError, onSubmit } = useSubmit(update, redirectURL)

  return (
    <>
      <ServerErrorView error={serverError} />
      <Get asyncFn={doGet} deps={[id]}>
        {(data: T) => <Component initial={data} onSubmit={onSubmit} />}
      </Get>
    </>
  )
}
