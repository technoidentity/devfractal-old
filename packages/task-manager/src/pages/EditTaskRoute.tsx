import React from 'react'
import { RouteComponentProps } from 'react-router'
import { getTask, updateTask } from '../api'
import { Task } from '../utils'
import { TaskForm } from '../views'

export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match, history }) => {
  const [task, setTask] = React.useState<Task | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  const id = match.params.id

  React.useEffect(() => {
    getTask(id)
      .then(setTask)
      .catch(setError)
  }, [id])

  return (
    <section className="section">
      <h1 className="title has-text-centered">Edit Task</h1>
      {error && (
        <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
      )}
      {task && (
        <TaskForm
          onSubmit={data => updateTask(id, data).then(() => history.push('/'))}
          initial={task}
        />
      )}
      return <h1 className="is-text is-size-1 is-info">Loading....</h1>
    </section>
  )
}
