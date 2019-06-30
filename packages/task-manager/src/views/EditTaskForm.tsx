import React from 'react'
import { getTask, updateTask } from '../api'
import { Task } from '../utils'
import { TaskForm } from './TaskForm'

export interface EditTaskFormProps {
  readonly id: string
  onEdit(values: Task): Promise<void>
}

// @TODO: yup validation

export const EditTaskForm: React.FC<EditTaskFormProps> = ({ id, onEdit }) => {
  const [task, setTask] = React.useState<Task | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    getTask(id)
      .then(setTask)
      .catch(setError)
  }, [id])

  if (error) {
    return <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
  }

  if (task) {
    return (
      <TaskForm
        onSubmit={data => updateTask(id, data).then(() => onEdit(data))}
        initial={task}
      />
    )
  }

  return <h1 className="is-text is-size-1 is-info">Loading....</h1>
}