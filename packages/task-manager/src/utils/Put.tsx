import React from 'react'
import { Async, ServerError, useSubmit } from '.'

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
  const update = (data: T): Promise<T> => onPut(id, data)
  const { serverError, onSubmit } = useSubmit(update, redirectURL)

  return (
    <>
      <ServerError error={serverError} />
      <Async asyncFn={doGet} params={[id]}>
        {data => <Component initial={data} onSubmit={onSubmit} />}
      </Async>
    </>
  )
}
