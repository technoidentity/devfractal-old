import React from 'react'
import { TaskForm } from './TaskForm'
import { getTask, updateTask } from './tasksAPI'
import { Task } from './types'

export interface EditTaskFormProps {
  readonly id: string
  onEdit(values: Task): void
}

export const EditTaskForm: React.FC<EditTaskFormProps> = ({ id, onEdit }) => {
  const [values, setValues] = React.useState<Task | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    getTask(id)
      .then(setValues)
      .catch(setError)
  }, [id])
  if (error) {
    return <h1 style={{ color: 'red' }}>{error.message}</h1>
  }

  if (values) {
    return (
      <TaskForm
        onCreate={data => updateTask(id, data).then(() => onEdit(data))}
        initial={values}
      />
    )
  }
  return <h1>is Loading....</h1>
}
