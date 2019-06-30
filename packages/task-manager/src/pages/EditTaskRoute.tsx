import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { taskApi } from '../api'
import { Async, ServerError, Task, useSubmit } from '../utils'
import { TaskForm } from '../views'

interface PutProps<T extends Object> {
  readonly url: string
  readonly title: string
  readonly id: string
  doGet(id: string): Promise<T>
  onPut(id: string, values: T): Promise<T>
  readonly component: React.FC<{
    readonly initial?: Task
    onSubmit(values: Task): Promise<void>
  }>
}

export function Put<T>({
  id,
  url,
  title,
  doGet,
  onPut,
}: PutProps<T>): JSX.Element {
  const update = (data: T): Promise<T> => onPut(id, data)

  const [serverError, onSubmit] = useSubmit(url, update)

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

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match }) => (
  <Put
    title="Edit Task"
    url="/tasks"
    id={match.params.id}
    doGet={taskApi.get}
    onPut={taskApi.update}
    component={TaskForm}
  />
)
