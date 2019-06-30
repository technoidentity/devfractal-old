import React from 'react'
import { Section } from 'technoidentity-devfractal'
import { taskApi } from '../api'
import { ServerError, useSubmit } from '../utils'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => {
  const [serverError, onSubmit] = useSubmit('/tasks', taskApi.create)

  return (
    <Section>
      <h1 className="title has-text-centered">Create Task</h1>
      <ServerError error={serverError} />
      <TaskForm onSubmit={onSubmit} />
    </Section>
  )
}
