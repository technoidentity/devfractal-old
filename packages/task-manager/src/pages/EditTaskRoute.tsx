import React from 'react'
import { RouteComponentProps } from 'react-router'
import { getTask, updateTask } from '../api'
import { GETView, ServerError, Task, useOne, useSubmit } from '../utils'
import { TaskForm } from '../views'

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match }) => {
  const id = match.params.id
  const update = (data: Task) => updateTask(id, data)

  const [data, error] = useOne(getTask, id)
  const [serverError, onSubmit] = useSubmit('/tasks', update)

  return (
    <section className="section">
      <h1 className="title has-text-centered">Edit Task</h1>
      <ServerError serverError={serverError} />
      <GETView
        data={data}
        error={error}
        component={TaskForm}
        onSubmit={onSubmit}
      />
    </section>
  )
}
