import React from 'react'
import { RouteComponentProps } from 'react-router'
import { taskApi } from '../api'
import { GET, ServerError, Task, useSubmit } from '../utils'
import { TaskForm } from '../views'

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match }) => {
  const id = match.params.id
  const update = (data: Task) => taskApi.update(id, data)

  const [serverError, onSubmit] = useSubmit('/tasks', update)

  return (
    <section className="section">
      <h1 className="title has-text-centered">Edit Task</h1>
      <ServerError error={serverError} />
      <GET asyncFn={taskApi.get} param={id}>
        {data => <TaskForm initial={data} onSubmit={onSubmit} />}
      </GET>
    </section>
  )
}
