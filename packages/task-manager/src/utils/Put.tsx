import React from 'react'
import { Async, ServerError, useSubmit } from '.'

export interface PutComponentProps<T extends Object> {
  readonly initial?: T
  onSubmit(values: T): Promise<void>
}

export interface PutProps<T extends Object> {
  readonly url: string
  readonly title: string
  readonly id: string
  doGet(id: string): Promise<T>
  onPut(id: string, values: T): Promise<T>
  readonly component: React.FC<PutComponentProps<T>>
}

export function Put<T>({
  id,
  url,
  title,
  doGet,
  onPut,
  component: Component,
}: PutProps<T>): JSX.Element {
  const update = (data: T): Promise<T> => onPut(id, data)

  const { serverError, onSubmit } = useSubmit(url, update)

  return (
    <section className="section">
      <h1 className="title has-text-centered">{title}</h1>
      <ServerError error={serverError} />
      <Async asyncFn={doGet} param={[id]}>
        {data => <Component initial={data} onSubmit={onSubmit} />}
      </Async>
    </section>
  )
}
