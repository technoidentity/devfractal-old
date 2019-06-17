import axios from 'axios'
import React from 'react'
import { toDate } from 'technoidentity-devfractal'
import { TaskForm } from './TaskForm'
import { TaskValues } from './TaskValues'

export interface EditTaskFormProps {
  readonly id: string
  onEdit(values: TaskValues): void
}

const getTask = async (id: string) => {
  const result = await axios.get(`http://localhost:9999/tasks/${id}`)
  return result.data
}

export const putTask = async (id: string, data: TaskValues | undefined) => {
  const result = await axios.put(`http://localhost:9999/tasks/${id}`, data)

  return result.data
}
export const EditTaskForm: React.FC<EditTaskFormProps> = ({ id, onEdit }) => {
  const [values, setValues] = React.useState<TaskValues | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    getTask(id)
      .then(data => {
        const values = {
          title: data.title,
          description: data.description,
          dateInfo: {
            started: toDate(data.dateInfo.started),
            deadline: toDate(data.dateInfo.deadline),
            scheduled: toDate(data.dateInfo.scheduled),
            completed:
              data.dateInfo.completed && toDate(data.dateInfo.completed),
          },
        }
        setValues(values)
      })

      .catch(setError)
  }, [id])
  if (error) {
    return <h1>{error.message}</h1>
  }

  if (values) {
    return (
      <TaskForm
        onCreate={data => putTask(id, data).then(() => onEdit(data))}
        initial={values}
      />
    )
  }
  return <h1>is Loading....</h1>
}
